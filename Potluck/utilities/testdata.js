import { userData, postData, reviewData } from './data.js'

const currentUser = new userData("Steve Sanchez", "Imma bum", "stevesanchez", 3.9, [], [], [], require('./../assets/pfp.jpg'));
const sampleUser = new userData("Dave Sanchez", "I'm just a glizzy gobbler looking for some mommy milk.", "davesanchez", 4.5, [], [], [], require('./../assets/pfp.jpg'));
const sampleUser2 = new userData("Miles Morales", "Trying my best!", "milesmorales12", 4.8, [], [], [], require('./../assets/Miles2.png'));
const samplePost = new postData(sampleUser, "Ayo!!! I have some extra glizzy and mommy milk for whoever wants it.", ["Meat", "Dairy"], require('./../assets/pfp.jpg'), "Delta Tau Delta", { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntytKi83u6wRXBclcFJFfoEqV1AMZ_g53JQ&usqp=CAU'});
const samplePost2 = new postData(sampleUser2, "Hey guys I have some extra bags of doritos up for grabs in Cunningham.", ["Snacks"], require('./../assets/pfp.jpg'), "Cunningham Hall", {uri: 'https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg'});
const sampleReview = new reviewData(currentUser, "This guy is a bum", "He's a bum", 1, sampleUser);


export const getSampleUser = () => {

    return sampleUser;

};

export const getSampleUser2 = () => {

    return sampleUser2;

};

export const getSamplePost = () => {

    return samplePost;

};

export const getSamplePost2 = () => {

    return samplePost2;

};

export const getCurrentUser = () =>{

    return currentUser;

};

export const getSampleReview = () => {

    return sampleReview;

};