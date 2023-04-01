import {
	ArrowBackIos,
	Close,
	ModeCommentOutlined,
	Send,
} from '@mui/icons-material';
import React, { useState, useRef, useEffect } from 'react';
import EachChat from './EachChat';
import '../css/chatbox.css';

// Chat Box OutSide Handler

const OutSideAlerter = (ref1, ref2, setOpenChat, setSelectedChat) => {
	useEffect(() => {
		const handleOutSideClick = e => {
			if (ref1.current && !ref1.current.contains(e.target)) {
				setOpenChat('calc(100% - 50px)');
				if (ref2.current && ref2.current.contains(e.target)) {
					setOpenChat('calc(100% - 400px)');
				} else {
					setOpenChat('calc(100% - 50px)');
					setSelectedChat('');
				}
			}
		};
		document.addEventListener('mousedown', handleOutSideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutSideClick);
		};
	}, [ref1, ref2, setOpenChat, setSelectedChat]);
};

export default function Chatbox({ data, selectedId }) {
	const [openChat, setOpenChat] = useState('calc(100% - 50px)');
	const [selectedChat, setSelectedChat] = useState('');
	const [rotate, setRotate] = useState('90deg');
	const [sgn, setSgn] = useState('+');
	const chatBoxRef1 = useRef();
	const chatBoxRef2 = useRef();
	OutSideAlerter(chatBoxRef1, chatBoxRef2, setOpenChat, setSelectedChat);
	return (
		<>
			<div
				ref={chatBoxRef1}
				className='chatboxContainer'
				style={{ top: `${openChat}` }}>
				<div
					className='chatboxHeader fb ac jse'
					onClick={() => {
						openChat === 'calc(100% - 50px)'
							? setOpenChat('calc(100% - 400px)')
							: setOpenChat('calc(100% - 50px)');
						rotate === '90deg' ? setRotate('-90deg') : setRotate('90deg');
						sgn === '+' ? setSgn('-') : setSgn('+');
					}}>
					<div className='fb ac jse' style={{ width: '40%' }}>
						<ModeCommentOutlined />
						<h3>Chats</h3>
					</div>
					<div className='upArrow fb ac je' style={{ width: '60%' }}>
						<div
							className='arrowBox fb jc ac'
							style={{ transform: `translateY(${sgn}5px) rotate(${rotate})` }}>
							<ArrowBackIos />
						</div>
					</div>
				</div>
				<div className='chatboxWrapper fb ac jc'>
					<div className='chatListContainer'>
						{data.map(eachData => {
							return eachData.id !== selectedId ? (
								<EachChat
									key={eachData.id}
									eachData={eachData}
									setSelectedChat={setSelectedChat}
								/>
							) : (
								''
							);
						})}
					</div>
				</div>
			</div>
			{selectedChat !== '' ? (
				<div ref={chatBoxRef2} className='chatDetailContainer'>
					<div className='chatboxHeader fb ac jse'>
						<div className='chatPic fb ac jc'>
							<img src={data[selectedChat - 1].profilepicture} alt='' />
						</div>
						<div className='name'>{data[selectedChat - 1].name}</div>
						<div className='chatStatus fb ac jc'>
							<Close onClick={() => setSelectedChat('')} />
						</div>
					</div>
					<div className='chatMessagesContainer'>
						<div className='miniMessage' style={{ float: 'left' }}>
							Hi! How are You?
						</div>
						<div className='miniMessage' style={{ float: 'right' }}>
							I am good. wbu?
						</div>
						<div className='miniMessage' style={{ float: 'left' }}>
							Great
						</div>
						<div className='miniMessage' style={{ float: 'right' }}>
							Hi! How are You?
						</div>
						<div className='miniMessage' style={{ float: 'left' }}>
							Hi! How are You?
						</div>
						<div className='miniMessage' style={{ float: 'left' }}>
							Hi! How are You?
						</div>

						<div className='miniMessage' style={{ float: 'right' }}>
							Hi! How are You?
						</div>
					</div>
					<div className='chatInput'>
						<div className='inputWrapper fb ac jc'>
							<input type='text' />
							<Send />
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}
