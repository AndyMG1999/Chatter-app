const getUniqueId = () => {
    return Math.floor(Math.random() * Date.now());
  }
  
const postData = [
{
    id: 1,
    groupName: 'Chatter',
    postedBy: 'ChatterOfficial',
    postTitle: 'Hello World!',
    postImageUrl: 'https://previews.123rf.com/images/maxborovkov/maxborovkov1809/maxborovkov180900067/110330061-cartel-de-bienvenida-de-oto%C3%B1o-con-coloridas-hojas-de-arce-fondo-de-vector-.jpg',
    postDetails: 'Welcome to chatter! A legally distinct reddit!',
    numberOfLikes: 2067423,
    postedOn: Date.now()+3,
    },
    {
        id: 2,
        groupName: 'Computer Science',
        postedBy: 'Miguel027',
        postTitle: 'How did you get your CS internship?',
        postDetails: 'Looking for numbers and statistics. It\'s okay if you don\'t want to reveal personal info, but give a rough idea (e.g. top valley startup, top 10 university)',
        numberOfLikes: 26,
        postedOn: Date.now()+2,
    },
    {
        id: 3,
        groupName: 'Chatter Gaming',
        postedBy: 'twoThumbs_up',
        postTitle: 'Any game recommendations for 2022?',
        numberOfLikes: 82,
        postedOn: Date.now()+1,
    },
    {
        id: 4,
        groupName: 'Chatter Gaming',
        postedBy: 'Miguel027',
        postImageUrl:'https://bgr.com/wp-content/uploads/2015/11/fallout-4-bugs.png',
        postTitle: 'Toaster Dog',
        numberOfLikes: 1753,
        postedOn: Date.now(),
    },
];

const commentsData = [
    {
        id: 1,
        replyingTo: null,
        postId: 2,
        postedBy: 'twoThumbs_up',
        comment: 'They asked some basic questions like "what is polymorphism?" and "what is a super class?". They wanted to see some code that I had made, so I showed them some stuff from my classes.',
        numberOfLikes: 24,
        postedOn: Date.now(),
    },
    {
        id: 2,
        replyingTo: null,
        postId: 2,
        postedBy: 'ChatterOfficial',
        comment: 'Chatter here! We don\'t pay our interns, but don\'t worry... they can\'t complain >:)',
        numberOfLikes: 152,
        postedOn: Date.now()+1,
    },
    {
        id: 3,
        replyingTo: null,
        postId: 2,
        postedBy: 'Miguel027',
        comment: 'Thanks for responding to my post!',
        numberOfLikes: 14,
        postedOn: Date.now()+2,
    },
    {
        id: 4,
        replyingTo: 2,
        postId: 2,
        postedBy: 'twoThumbs_up',
        comment: 'I really hope this is just a very bad joke...',
        numberOfLikes: 145,
        postedOn: Date.now()+2,
    },
    {
        id: 5,
        replyingTo: 2,
        postId: 2,
        postedBy: 'Miguel027',
        comment: 'This is not it :l',
        numberOfLikes: 35,
        postedOn: Date.now()+2,
    },
    {
        id: 6,
        replyingTo: null,
        postId: 4,
        postedBy: 'ChatterOfficial',
        comment: 'Toaster Dog',
        numberOfLikes: 145,
        postedOn: Date.now()+2,
    },
    {
        id: 7,
        replyingTo: 6,
        postId: 4,
        postedBy: 'Miguel027',
        comment: 'Toaster Dog',
        numberOfLikes: 145,
        postedOn: Date.now()+2,
    },
];

const groupsData = [
    {
        id: 1,
        groupName: 'Chatter',
        groupDescription: 'The Official Channel of Chatter! Make yourself at home.',
        groupProfilePictureUri: '',
        groupBannerUri: 'https://t4.ftcdn.net/jpg/03/16/92/61/360_F_316926143_cVdnI6bJPbhlo1yZVTJk0R0sjBx4vVnO.jpg',
        groupFollowers: 457472,
    },
    {
        id: 2,
        groupName: 'Computer Science',
        groupDescription: 'We do SCIENCE on the COMPUTER',
        groupProfilePictureUri: '',
        groupBannerUri: 'https://png.pngtree.com/thumb_back/fh260/background/20201020/pngtree-vector-abstract-futuristic-digital-landscape-with-particles-dots-and-stars-on-image_427221.jpg',
        groupFollowers: 1503,
    },
    {
        id: 3,
        groupName: 'Chatter Gaming',
        groupDescription: 'Obgligatory Gaming Channel',
        groupProfilePictureUri: '',
        groupBannerUri: 'https://ze-robot.com/images/source/28715.jpg',
        groupFollowers: 1037092,
    },
];

const userLoginData = [
    {
        id: 1,
        username: 'ChatterOfficial',
        email: 'chatter@gmail.com',
        password: 'abc123'
    },
    {
        id: 2,
        username: 'testUser001',
        email: 'test@gmail.com',
        password: '123'
    },
    {
        id: 3,
        username: 'testUser002',
        email: 'test2@gmail.com',
        password: 'password2'
    },
];

const userInfoData = [
    {
        userId: 1,
        dOB: '',
        cakeDay: '2/01/2022',
        pronouns: '',
        profileImageName: 'https://cdnb.artstation.com/p/assets/images/images/038/107/385/large/kotanko-3d-cuterobot-0000.jpg?1622187572&dl=1',
    },
    {
        userId: 2,
        dOB: '01/01/1983',
        cakeDay: '3/10/2022',
        pronouns: 'they/them',
        profileImageName: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
    },
    {
        userId: 3,
        dOB: '01/01/1983',
        cakeDay: '3/10/2022',
        pronouns: 'they/them',
        profileImageName: 'https://wallpaperaccess.com/full/4595683.jpg',
    },
];

export {postData,commentsData,userLoginData,userInfoData,groupsData};