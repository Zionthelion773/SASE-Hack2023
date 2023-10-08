import { getImageUrl } from '../utilities/utils.js';

class User {

    name = "";
    email = "";
    stars = null;
    bio = "";

    User(name, email) {
        this.name = name;
        this.email = email;
    }

    profileImage(){
        return (
            <Image
                className="avatar"
                source={getImageUrl()}
                alt={this.name}
            />
        );
    }
    
}