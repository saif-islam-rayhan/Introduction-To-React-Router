
const User = ({user}) => {
    const {id,name,phone,email}=user;
    const userStyle={
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={userStyle}>
            <h2>User Id:{id}</h2>
            <h2>Name:{name}</h2>
            <p>Phone:{phone}</p>
            <p>Email:{email}</p>
        </div>
    );
};

export default User;