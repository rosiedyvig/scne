import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProfile, updateProfileAlt, logout } from '../api-service';
import { Divider, Chip } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const ProfileUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  
  const loggedInUserId = localStorage.getItem('userId')
  

  const handleEndorse = async () => {
    const updatedUser = { ...user, endorsed: user.endorsed + 1 };
    const response = await updateProfileAlt(id, updatedUser);
    if (response.success) {
      setUser(updatedUser);
    }
  };

 

  useEffect(() => {
    if (loggedInUserId && id === loggedInUserId) {
      getProfile(loggedInUserId).then((data) => setUser(data));
    } else {
      getProfile(id).then((data) => setUser(data));
    }
  }, [id, loggedInUserId]);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editprofile/${id}`);
  };

  const handleLogout = async () => {
    try {
      
      await navigate('/logout');
      console.log('logout')
      
      await logout();
  
      
      localStorage.removeItem('userId');


    } catch (error) {
      console.error('Error during logout:', error);
    
  };
    
    
  };

  if (!user) {
    return <div>Uh. oh... We've encountered an error finding this user</div>;
  }

  return (
    <>
      <div className="userProfileContainer">
        {loggedInUserId === id && (
          <div className="editAndLogout">
            <Button sx={{ width: '25%' }} onClick={handleEdit} variant="outlined" size="small">
              edit
            </Button>
            <Button sx={{ width: '25%' }} variant="outlined" size="small" onClick={handleLogout}>
              logout
            </Button>
          </div>
        )}
        <div className="userProfileContent">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3>{user.firstName}</h3> <span>&nbsp;</span>
            <h3>{user.lastName}</h3>
            <h4 style={{ marginLeft: '20%' }}>{user.ig}</h4>
          </div>
          <Divider />
          <div className="userProfilePicCircle">
            <img className="userProfilePic" src={user.photo} alt={''} />
          </div>
          <div style={{ margin: '10px' }}>{user.bio}</div>

          {user.member ? (
            <Divider>
              <Chip label="TEAM" />
            </Divider>
          ) : (
            <Divider />
          )}
          <h3>{user.member}</h3>
          <div>{user.email}</div>
          <Divider />
          <div>{user.reviewCount}</div>
          <IconButton
            aria-label="review"
            sx={{ transform: 'scale(2)', position: 'absolute', bottom: '50px', right: '40px' }}
            onClick={handleEndorse}
          >
            <AutoAwesomeIcon sx={{ color: '#70FF00' }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;