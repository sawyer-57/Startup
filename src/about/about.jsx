import React from 'react';
import './about.css';

export function About() {
  return (
    <div className='page-content'>
            <div id="picture" className="picture-box"><img src="https://images.unsplash.com/photo-1619526932016-bc0eac4f0cbe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="random" /> </div>

            <p>
            Have you ever wanted to learn a new skill but just didn't know where to start? Have you ever worked so hard 
            to learn something but just kept getting it wrong? Level up is the app for you! Level up allows you to chat 
            with other users, share video links, ask for help, and offer suggestions to improve your skill set in a 
            variety of categories!
            </p>

            <p>
            Whether you want to improve your physical skills like sports and dance or your intellectual skills like 
            math and puzzles, Level up has a community of users ready to help you level up your abilities!
            </p>

            <p>
            Select a category from the "Select Category" tab to get started!
            </p>

            <div id="quote">
                <div>"The expert in anything was once a beginner."</div>
                <div>- Helen Hayes </div>
            </div>
        </div>
  );
}