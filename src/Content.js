import React, { useState, useEffect } from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import Box from '@material-ui/core/Box';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import Tooltip from '@material-ui/core/Tooltip';
// import SendIcon from '@material-ui/icons/Send';
// import MicIcon from '@material-ui/icons/Mic';
// import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
// import ClearAllIcon from '@material-ui/icons/ClearAll';
// import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
// import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
// import { makeStyles } from '@material-ui/core/styles';

import ChatBubble from 'containers/ChatBubble/Loadable';
import IMG1 from './bot-1.png';
import IMG2 from './bot-1.png';
// import { scrollToElementId } from 'utils/DomUtils';
// import { speakChaiBot } from 'utils/VoiceUtils';
// import { sendContext } from 'api/AiClubGymApi';

const Defaultmessage = [
  {
    type: 0,
    image: IMG1,
    text: "Hello! I'm the Chai bot ask anything from me!",
  },
];

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const mic = new SpeechRecognition();

// mic.continuous = true;
// mic.interimResults = true;
// mic.lang = 'en-US';

// const useStyles = makeStyles(() => ({
//   root: {
//     marginTop: 10,
//   },
// }));

const Content = () => {
  // const classes = useStyles();
  const [messages, setMessages] = useState(Defaultmessage);
  const [userInput, setUserInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isEnableSpeach, setIsEnableSpeech] = useState(true);

  // useEffect(() => {
  //   handleListen();
  // }, [isListening]);

  // const handleListen = () => {
  //   if (isListening) {
  //     mic.start();
  //   } else {
  //     mic.stop();
  //   }

  //   mic.onresult = event => {
  //     const transcript = Array.from(event.results)
  //       .map(result => result[0])
  //       .map(result => result.transcript)
  //       .join('');
  //     setUserInput(transcript);
  //     mic.onerror = eventEr => {
  //       mic.stop();
  //       setIsListening(false);
  //       console.error(eventEr.error);
  //     };
  //   };
  // };

  const handleSend = async e => {
    if (e) {
      e.preventDefault();
    }

    const msg = [...messages];
    const obj = {
      type: 1,
      image: IMG2,
      text: userInput,
    };
    const typing = {
      type: 0,
      image: IMG1,
      text: '...',
    };

    msg.push(obj);
    msg.push(typing);
    setMessages(msg);
    setUserInput('');

    // const res = await sendContext({
    //   context: userInput,
    //   question: userInput,
    // });

    // if (res && res.answers) {
    //   const obj1 = {
    //     type: 0,
    //     image: IMG1,
    //     text: res.answers,
    //   };
    //   msg[msg.length - 1] = obj1;
    //   if (isEnableSpeach) {
    //     speakChaiBot(res.answers);
    //   }
    }

    setMessages([]);
    setMessages(msg);
    // scrollToElementId('chat-input');

    if (isListening) {
      setIsListening(false);
    }
  };

  const handleUserInput = e => {
    const { value } = e.target;
    setUserInput(value);
  };

  const handleClear = () => {
    setMessages(Defaultmessage);
  };

  const handleCancelSpeech = () => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      synthesis.cancel();
    }
  };

  const handleSpeech = () => {
    if (isEnableSpeach) {
      setIsEnableSpeech(false);
      handleCancelSpeech();
    } else {
      setIsEnableSpeech(true);
    }
  };

  return (
    <>
      <ChatBubble messages={messages} />
      // <div className={classes.root} id="chat-input">
      //   <Grid container spacing={1} direction="row" alignItems="center">
      //     <Grid item xs={12} sm={9}>
      //       <form onSubmit={handleSend}>
      //         <TextField
      //           label="Message"
      //           variant="outlined"
      //           value={userInput}
      //           fullWidth
      //           onChange={handleUserInput}
      //         />
      //       </form>
      //     </Grid>
      //     <Grid item xs={12} sm={3}>
      //       <Box display="flex" flexDirection="row" alignItems="center">
      //         <Box>
      //           <IconButton disabled={!userInput} onClick={handleSend}>
      //             <SendIcon />
      //           </IconButton>
      //         </Box>
      //         <Box>
      //           <Tooltip title="Click to speech">
      //             <IconButton
      //               onClick={() => setIsListening(prevState => !prevState)}
      //             >
      //               {isListening ? <RecordVoiceOverIcon /> : <MicIcon />}
      //             </IconButton>
      //           </Tooltip>
      //         </Box>
      //         <Box>
      //           <Tooltip title="Enable/Disable Bot's Voice">
      //             <IconButton onClick={handleSpeech}>
      //               {isEnableSpeach ? (
      //                 <VolumeUpRoundedIcon />
      //               ) : (
      //                 <VolumeOffRoundedIcon />
      //               )}
      //             </IconButton>
      //           </Tooltip>
      //         </Box>
      //         <Box>
      //           <Tooltip title="Clear the chat">
      //             <IconButton onClick={handleClear}>
      //               <ClearAllIcon />
      //             </IconButton>
      //           </Tooltip>
      //         </Box>
      //       </Box>
      //     </Grid>
      //   </Grid>
      // </div>
    </>
  );
};

export default Content;
