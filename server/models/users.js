const {DataTypes } = require('sequelize');
const sequelize = require('./index');


const Users = sequelize.define('Users', {
    
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    member: {
        type: DataTypes.STRING,
    },
    endorsed: {
        type: DataTypes.INTEGER,
    },
    reviewCount: {
        type: DataTypes.INTEGER,
    },
    press: {
        type: DataTypes.BOOLEAN,
    },
    ig: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING,
    },
    photo: {
        type: DataTypes.STRING,
    },
    scene0: {
        type: DataTypes.STRING,
    },
    scene1: {
        type: DataTypes.STRING,
    },
    scene2: {
        type: DataTypes.STRING,
    }
});

const UserPosts = sequelize.define('UserPosts', {
    
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event: {
        type: DataTypes.BOOLEAN,
    },
    comment: {
        type: DataTypes.BOOLEAN,
    },
    scene: {
        type: DataTypes.STRING,
    },
    postPhoto: {
        type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    }

});


Users.hasMany(UserPosts, { as: 'posts', foreignKey: 'userId', onDelete: 'CASCADE' });
UserPosts.belongsTo(Users, { foreignKey: 'userId', as: 'user', onDelete: 'CASCADE' });

// module.exports = {
//     Users: sequelize.models.Users,
//     UserPosts: sequelize.models.UserPosts,
// }
module.exports = sequelize;