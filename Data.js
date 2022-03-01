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

export {postData,commentsData};