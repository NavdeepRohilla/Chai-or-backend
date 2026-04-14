import express from 'express'


const app = express();

app.get('/' , (req , res) => {
    res.send('Server is ready');
})

// get a list of 5 jokes

app.get('/api/jokes' , (req , res) =>{
    const jokes = [
        {
            id: 1,
            title: 'Why did the scarecrow win an award?',
            container: 'Because he was outstanding in his field!'
        },
        {
            id: 2,
            title: 'Why don\'t scientists trust atoms?',
            container: 'Because they make up everything!'
        },
        {
            id: 3,
            title: 'What do you call fake spaghetti?',
            container: 'An impasta!'
        },
        {
            id: 4,
            title: 'Why did the bicycle fall over?',
            container: 'Because it was two-tired!'
        },
        {
            id: 5,
            title: 'What do you call a bear with no teeth?',
            container: 'A gummy bear!'
        }   
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`Server is running at http://localhost:${port}`);
})