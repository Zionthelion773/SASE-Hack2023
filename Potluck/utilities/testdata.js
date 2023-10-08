import { userData, postData, reviewData } from './data.js'

currentUser = new userData("Steve Sanchez", "Imma bum", "stevesanchez", 3.9, [], [], [], require('./../assets/pfp.jpg'));
sampleUser = new userData("Dave Sanchez", "I'm just a glizzy gobbler looking for some mommy milk.", "davesanchez", 4.5, [], [], [], require('./../assets/pfp.jpg'));
samplePost = new postData(currentUser, "Ayo!!! I have some extra glizzy and mommy milk for whoever wants it.", ["Meat", "Dairy"], require('./../assets/pfp.jpg'), "Delta Tau Delta");
sampleReview = new reviewData(currentUser, "This guy is a bum", "He's a bum", 1, sampleUser);


export const getSampleUser = () => {

    return sampleUser;

};

export const getSamplePost = () => {

    return samplePost;

};

export const getCurrentUser = () =>{

    return currentUser;

};

export const getSampleReview = () => {

    return sampleReview;

};