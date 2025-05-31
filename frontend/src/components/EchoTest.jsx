import React, { useEffect, useRef, useState } from 'react';
import Janus from 'janus-gateway';

const EchoTest = () => {
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState('Initializing...');
  
  const janusRef = useRef(null);
  const echotestRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    initJanus();

    return () => {
      cleanup();
      if (janusRef.current) {
        janusRef.current.destroy();
      }
    };
  }, []);

  const initJanus = () => {
    Janus.init({
      debug: 'all',
      callback: () => {
        // Create session
        const j = new Janus({
          server: 'http://localhost:8088/janus',
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
          ],
          ipv6: false,
          withCredentials: false,
          max_poll_events: 10,
          success: () => {
            setStatus('Connected to Janus Gateway');
            janusRef.current = j;
            attachEchoPlugin(j);
          },
          error: (error) => {
            setStatus('Error connecting to Janus: ' + error);
            console.error(error);
          },
          destroyed: () => {
            setStatus('Janus instance destroyed');
            cleanup();
          },
          apisecret: 'janusrocks' // Match the api_secret in janus.jcfg
        });
      }
    });
  };

  const attachEchoPlugin = (j) => {
    j.attach({
      plugin: 'janus.plugin.echotest',
      opaqueId: 'echotest-' + Janus.randomString(12),
      success: (pluginHandle) => {
        console.log('Plugin attached! (' + pluginHandle.getPlugin() + ', id=' + pluginHandle.getId() + ')');
        // Store the plugin handle in ref
        echotestRef.current = pluginHandle;
        setStatus('Echo plugin attached');
        
        // Set up the WebRTC event handlers
        pluginHandle.onlocalstream = (stream) => {
          console.log('Got local stream!');
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }
        };
        
        pluginHandle.onremotestream = (stream) => {
          console.log('Got remote stream!');
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = stream;
          }
        };

        // Set up message handler
        pluginHandle.onmessage = (msg, jsep) => {
          console.log('Got message:', msg);
          if (jsep) {
            console.log('Got jsep:', jsep);
            pluginHandle.handleRemoteJsep({ jsep: jsep })
              .catch(e => console.error('Error handling remote jsep:', e));
          }
        };
      },
      error: (error) => {
        setStatus('Error attaching plugin: ' + error);
        console.error(error);
      },
      consentDialog: (on) => {
        setStatus(on ? 'Requesting media access...' : 'Media access granted');
      },
      onmessage: (msg, jsep) => {
        console.log('Got message:', msg);
        if (jsep) {
          console.log('Got jsep:', jsep);
          // Make sure we have a valid plugin handle
          if (echotestRef.current) {
            echotestRef.current.handleRemoteJsep({ jsep: jsep })
              .catch(e => console.error('Error handling remote jsep:', e));
          } else {
            console.error('No plugin handle available');
            setStatus('Error: No plugin handle available');
          }
        }
      },
      onlocalstream: (stream) => {
        console.log('Got local stream:', stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
          localVideoRef.current.play()
            .catch(e => console.error('Error playing local video:', e));
        }
      },
      onremotestream: (stream) => {
        console.log('Got remote stream:', stream);
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = stream;
          remoteVideoRef.current.play()
            .catch(e => console.error('Error playing remote video:', e));
        }
      }
    });
  };

  const startEcho = async () => {
    if (!echotestRef.current) {
      setStatus('Plugin not ready');
      return;
    }

    try {
      setStatus('Preparing media...');
      
      // Request media access first
      await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      
      // Negotiate WebRTC
      echotestRef.current.createOffer({
        media: { 
          audioRecv: true,
          videoRecv: true,
          audioSend: true,
          videoSend: true,
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        },
        trickle: true,
        success: (jsep) => {
          console.log('Got SDP:', jsep);
          echotestRef.current.send({
            message: { 
              audio: true,
              video: true,
              bitrate: 1024000
            },
            jsep: jsep
          });
          setStarted(true);
          setStatus('Echo test started');
        },
        error: (error) => {
          setStatus('Error starting echo: ' + error);
          console.error('Error creating offer:', error);
        }
      });
    } catch (error) {
      setStatus('Error accessing media: ' + error.message);
      console.error('Error starting echo test:', error);
    }
  };

  const stopEcho = () => {
    if (!echotestRef.current) return;
    
    echotestRef.current.send({ message: { audio: false, video: false } });
    setStarted(false);
    setStatus('Echo test stopped');
  };

  const cleanup = () => {
    if (started) {
      setStarted(false);
    }
    if (echotestRef.current) {
      try {
        echotestRef.current.hangup();
      } catch (e) {
        console.error('Error during hangup:', e);
      }
      echotestRef.current = null;
    }
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="text-lg font-semibold text-gray-700">{status}</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            controls
            width="640"
            height="360"
            className="w-full rounded-lg shadow-lg bg-gray-900"
          />
          <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded">
            Local Video
          </div>
        </div>
        
        <div className="relative">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            controls
            width="640"
            height="360"
            className="w-full rounded-lg shadow-lg bg-gray-900"
          />
          <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded">
            Remote Video (Echo)
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={started ? stopEcho : startEcho}
          disabled={!echotestRef.current}
          className={`px-4 py-2 rounded-lg font-medium ${
            started
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-primary-500 hover:bg-primary-600 text-white'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {started ? 'Stop Echo' : 'Start Echo'}
        </button>
      </div>
    </div>
  );
};

export default EchoTest;
