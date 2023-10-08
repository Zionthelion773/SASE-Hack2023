export const getSampleUser = () => {

    return {
        name: "Dave Sanchez",
        email: "davesanchez@potluck.com",
        imageSource: require('./../assets/pfp.jpg'),
        bio: "I'm just a glizzy gobbler looking for some mommy milk.",
        rating: 4.5
    }

};

export const getSamplePost = () => {

    return {
        location: "Delta Tau Delta",
        types: ["Meat", "Dairy"],
        message: "Ayo!!! I have some extra glizzy and mommy milk for whoever wants it.",
        comments: ['test'],
        id: 1
    }

};

export const getCurrentUser = () =>{

    return {
        name: "Steve Sanchez",
        email: "stevesanchez@potluck.com", 
        imageSource: require('./../assets/pfp.jpg'),
        bio: "Imma bum.",
        rating: 3.9
    }

};

export const getSampleReview = () => {

    return {
        name: "Walter White",
        email: "waltuh@potluck.com",
        imageSource: { uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png'},
        message: "This guy is a bum.",
        headline: "Bum",
        reviewRating: 1.5
    }
};