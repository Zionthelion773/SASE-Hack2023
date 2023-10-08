postId = 1;
eventId = 1;
posts = [];
events = [];
users = [];

export function reviewData(reviewUser, headline, message, reviewRating, userReviewed){
    this.reviewUser = reviewUser;
    this.headline = headline;
    this.message = message;
    this.reviewRating = reviewRating;
    this.userReviewed = userReviewed;
}


export function postData(user, message, types, imageSource, location){
    this.user = user;
    this.message = message;
    this.types = types;
    this.imageSource = imageSource;
    this.location = location;
    this.comments = [];
    this.id = postId;
    postId++;
    posts.push(this);
}

export function eventData(user, headline, message, types, imageSource, location){
    this.user = user;
    this.headline = headline;
    this.message = message;
    this.types = types;
    this.imageSource = imageSource;
    this.location = location;
    this.comments = [];
    this.id = eventId;
    eventId++;
    events.push(this);
}


export function userData(name, bio, username, rating, reviews, posts, events, imageSource){
    this.name = name;
    this.bio = bio;
    this.username = username;
    this.rating = rating;
    this.reviews = reviews;
    this.posts = posts;
    this.events = events;
    this.imageSource = imageSource;
    users.push(this);
}

getUser = (username) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            return users[i];
        }
    }
}