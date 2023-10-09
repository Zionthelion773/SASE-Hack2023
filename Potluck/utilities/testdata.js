import { userData, postData, reviewData } from './data.js'

currentUser = new userData("Vanessa Sanchez", "President of Greek Council & Animal Lover", "stevesanchez", 3.9, [], [], [], require('./../assets/pfp.jpg'));
sampleUser = new userData("Dave Sanchez", "Looking for new friends(and food)", "davesanchez", 4.5, [], [], [], {uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'});
sampleUser2 = new userData("Miles Morales", "Trying my best!", "milesmorales12", 4.8, [], [], [], require('./../assets/Miles2.png'));
samplePost = new postData(currentUser, "Yo!!! I have some extra hotdogs and milk for whoever wants it.", ["Meat", "Dairy"], require('./../assets/pfp.jpg'), "Delta Tau Delta", { uri: 'https://the1a.org/wp-content/uploads/sites/4/2023/06/IMG_1753.jpg'});
samplePost2 = new postData(sampleUser2, "Hey guys I have some extra bags of doritos up for grabs in Cunningham.", ["Snacks"], require('./../assets/pfp.jpg'), "Cunningham Hall", {uri: 'https://www.tastingtable.com/img/gallery/youre-not-imagining-it-there-really-are-less-chips-in-your-bag-of-doritos/intro-1647372398.jpg'});
sampleReview = new reviewData(currentUser, "This guy is a bum", "He's a bum", 1, sampleUser);


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