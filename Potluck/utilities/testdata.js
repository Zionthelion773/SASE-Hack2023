export const getSampleUser = () => {

    return {
        name: "Dave Sanchez",
        email: "davesanchez@potluck.com",
        imageSource: { uri: 'https://drive.google.com/uc?export=download&id=1bwAnGYoDKeUmNidsg-JF_62G8iq3hNZ4'},
        bio: "I'm just a glizzy gobbler looking for some mommy milk.",
        rating: 4.5
    }

};

export const getSamplePost = () => {

    return {
        location: "Delta Tau Delta",
        types: ["Meat", "Dairy"],
        message: "Ayo!!! I have some extra glizzy and mommy milk for whoever wants it."
    }

};

export const getCurrentUser = () =>{

    return {
        name: "Steve Sanchez",
        email: "stevesanchez@potluck.com", 
        imageSource: { uri: 'https://drive.google.com/uc?export=download&id=1bwAnGYoDKeUmNidsg-JF_62G8iq3hNZ4'},
        bio: "Imma bum.",
        rating: 3.9
    }

};