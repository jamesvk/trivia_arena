// let button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('works')
// })

const triviaData = [
    {
        category: "Music",
        data: [
            {
                questionID: 1,
                question: "Who is known as the King of Pop?",
                correctAns: "Michael Jackson",
                wrongAns: ["Prince", "Elvis Presley", "Justin Timberlake"]
            },
            {
                questionID: 2,
                question: "Which artist released the album '21'?",
                correctAns: "Adele",
                wrongAns: ["Taylor Swift", "Rihanna", "Beyoncé"]
            },
            {
                questionID: 3,
                question: "What band is known for the song 'Bohemian Rhapsody'?",
                correctAns: "Queen",
                wrongAns: ["The Beatles", "Led Zeppelin", "Pink Floyd"]
            },
            {
                questionID: 4,
                question: "Who is the lead singer of U2?",
                correctAns: "Bono",
                wrongAns: ["Sting", "Freddie Mercury", "Mick Jagger"]
            },
            {
                questionID: 5,
                question: "Which rapper is known as 'Slim Shady'?",
                correctAns: "Eminem",
                wrongAns: ["Drake", "Kanye West", "Jay-Z"]
            },
            {
                questionID: 6,
                question: "Which instrument has 88 keys?",
                correctAns: "Piano",
                wrongAns: ["Guitar", "Violin", "Drum"]
            },
            {
                questionID: 7,
                question: "Who sang 'Shape of You'?",
                correctAns: "Ed Sheeran",
                wrongAns: ["Shawn Mendes", "Justin Bieber", "Sam Smith"]
            },
            {
                questionID: 8,
                question: "Which band released 'Smells Like Teen Spirit'?",
                correctAns: "Nirvana",
                wrongAns: ["Pearl Jam", "Green Day", "Foo Fighters"]
            },
            {
                questionID: 9,
                question: "Who is known as the Queen of Pop?",
                correctAns: "Madonna",
                wrongAns: ["Lady Gaga", "Britney Spears", "Katy Perry"]
            },
            {
                questionID: 10,
                question: "Which artist released 'Blinding Lights'?",
                correctAns: "The Weeknd",
                wrongAns: ["Drake", "Post Malone", "Bruno Mars"]
            },
            {
                questionID: 11,
                question: "What band is known for 'Hey Jude'?",
                correctAns: "The Beatles",
                wrongAns: ["The Rolling Stones", "The Who", "The Kinks"]
            },
            {
                questionID: 12,
                question: "Who sang 'Rolling in the Deep'?",
                correctAns: "Adele",
                wrongAns: ["Sia", "Amy Winehouse", "Lorde"]
            },
            {
                questionID: 13,
                question: "Which artist released 'Thriller'?",
                correctAns: "Michael Jackson",
                wrongAns: ["Prince", "Stevie Wonder", "Usher"]
            },
            {
                questionID: 14,
                question: "Who is the lead singer of Coldplay?",
                correctAns: "Chris Martin",
                wrongAns: ["Thom Yorke", "Brandon Flowers", "Adam Levine"]
            },
            {
                questionID: 15,
                question: "Which rapper released 'God's Plan'?",
                correctAns: "Drake",
                wrongAns: ["Kendrick Lamar", "J. Cole", "Travis Scott"]
            },
            {
                questionID: 16,
                question: "Which singer is known for 'Firework'?",
                correctAns: "Katy Perry",
                wrongAns: ["Rihanna", "Taylor Swift", "Dua Lipa"]
            },
            {
                questionID: 17,
                question: "Which band is known for 'Hotel California'?",
                correctAns: "Eagles",
                wrongAns: ["Fleetwood Mac", "Journey", "Aerosmith"]
            },
            {
                questionID: 18,
                question: "Who sang 'Umbrella'?",
                correctAns: "Rihanna",
                wrongAns: ["Beyoncé", "Nicki Minaj", "Alicia Keys"]
            },
            {
                questionID: 19,
                question: "Which artist released 'Humble'?",
                correctAns: "Kendrick Lamar",
                wrongAns: ["Drake", "Kanye West", "Lil Wayne"]
            },
            {
                questionID: 20,
                question: "Which band is known for 'Wonderwall'?",
                correctAns: "Oasis",
                wrongAns: ["Blur", "Radiohead", "The Verve"]
            },
            {
                questionID: 21,
                question: "Who sang 'Bad Guy'?",
                correctAns: "Billie Eilish",
                wrongAns: ["Lorde", "Olivia Rodrigo", "Halsey"]
            },
            {
                questionID: 22,
                question: "Which band released 'Sweet Child O' Mine'?",
                correctAns: "Guns N' Roses",
                wrongAns: ["Metallica", "AC/DC", "Bon Jovi"]
            },
            {
                questionID: 23,
                question: "Who is known for the album '1989'?",
                correctAns: "Taylor Swift",
                wrongAns: ["Ariana Grande", "Selena Gomez", "Demi Lovato"]
            },
            {
                questionID: 24,
                question: "Which artist sang 'Uptown Funk'?",
                correctAns: "Bruno Mars",
                wrongAns: ["Pharrell Williams", "Justin Timberlake", "Usher"]
            },
            {
                questionID: 25,
                question: "What band is known for 'Stairway to Heaven'?",
                correctAns: "Led Zeppelin",
                wrongAns: ["Pink Floyd", "The Who", "Queen"]
            },
            {
                questionID: 26,
                question: "Who sang 'Shake It Off'?",
                correctAns: "Taylor Swift",
                wrongAns: ["Katy Perry", "Lady Gaga", "Rihanna"]
            },
            {
                questionID: 27,
                question: "Which rapper released 'Sicko Mode'?",
                correctAns: "Travis Scott",
                wrongAns: ["Future", "Drake", "Post Malone"]
            },
            {
                questionID: 28,
                question: "Which band is known for 'Clocks'?",
                correctAns: "Coldplay",
                wrongAns: ["Keane", "Snow Patrol", "Muse"]
            },
            {
                questionID: 29,
                question: "Who sang 'Someone Like You'?",
                correctAns: "Adele",
                wrongAns: ["Sia", "Sam Smith", "Lorde"]
            },
            {
                questionID: 30,
                question: "Which artist released 'Old Town Road'?",
                correctAns: "Lil Nas X",
                wrongAns: ["Post Malone", "Travis Scott", "Drake"]
            },
            {
                questionID: 31,
                question: "Who is the lead singer of Maroon 5?",
                correctAns: "Adam Levine",
                wrongAns: ["Brendon Urie", "Shawn Mendes", "Charlie Puth"]
            },
            {
                questionID: 32,
                question: "Which band is known for 'Enter Sandman'?",
                correctAns: "Metallica",
                wrongAns: ["Slayer", "Megadeth", "Pantera"]
            },
            {
                questionID: 33,
                question: "Who sang 'Halo'?",
                correctAns: "Beyoncé",
                wrongAns: ["Rihanna", "Alicia Keys", "Whitney Houston"]
            },
            {
                questionID: 34,
                question: "Which artist released 'Rockstar' (2017)?",
                correctAns: "Post Malone",
                wrongAns: ["Drake", "Future", "Lil Wayne"]
            },
            {
                questionID: 35,
                question: "Which band is known for 'Don't Stop Believin''?",
                correctAns: "Journey",
                wrongAns: ["Boston", "Foreigner", "REO Speedwagon"]
            },
            {
                questionID: 36,
                question: "Who sang 'Drivers License'?",
                correctAns: "Olivia Rodrigo",
                wrongAns: ["Billie Eilish", "Dua Lipa", "Taylor Swift"]
            },
            {
                questionID: 37,
                question: "Which artist released 'Lose Yourself'?",
                correctAns: "Eminem",
                wrongAns: ["Drake", "Jay-Z", "Nas"]
            },
            {
                questionID: 38,
                question: "Which band is known for 'Take On Me'?",
                correctAns: "a-ha",
                wrongAns: ["Duran Duran", "Tears for Fears", "Depeche Mode"]
            },
            {
                questionID: 39,
                question: "Who sang 'Call Me Maybe'?",
                correctAns: "Carly Rae Jepsen",
                wrongAns: ["Kesha", "Lady Gaga", "Katy Perry"]
            },
            {
                questionID: 40,
                question: "Which artist released 'Levitating'?",
                correctAns: "Dua Lipa",
                wrongAns: ["Ariana Grande", "Doja Cat", "SZA"]
            },
            {
                questionID: 41,
                question: "Which band is known for 'Radioactive'?",
                correctAns: "Imagine Dragons",
                wrongAns: ["OneRepublic", "Coldplay", "The Killers"]
            },
            {
                questionID: 42,
                question: "Who sang 'No Tears Left to Cry'?",
                correctAns: "Ariana Grande",
                wrongAns: ["Selena Gomez", "Miley Cyrus", "Demi Lovato"]
            },
            {
                questionID: 43,
                question: "Which artist released 'Stronger'?",
                correctAns: "Kanye West",
                wrongAns: ["Drake", "Kid Cudi", "Jay-Z"]
            },
            {
                questionID: 44,
                question: "Which band is known for 'Zombie'?",
                correctAns: "The Cranberries",
                wrongAns: ["No Doubt", "Garbage", "Hole"]
            },
            {
                questionID: 45,
                question: "Who sang 'We Found Love'?",
                correctAns: "Rihanna",
                wrongAns: ["Beyoncé", "Sia", "Lady Gaga"]
            },
            {
                questionID: 46,
                question: "Which artist released 'Good 4 U'?",
                correctAns: "Olivia Rodrigo",
                wrongAns: ["Billie Eilish", "Dua Lipa", "Halsey"]
            },
            {
                questionID: 47,
                question: "Which band is known for 'Mr. Brightside'?",
                correctAns: "The Killers",
                wrongAns: ["Arctic Monkeys", "Kings of Leon", "The Strokes"]
            },
            {
                questionID: 48,
                question: "Who sang 'Thinking Out Loud'?",
                correctAns: "Ed Sheeran",
                wrongAns: ["Sam Smith", "John Legend", "Shawn Mendes"]
            },
            {
                questionID: 49,
                question: "Which artist released 'Sunflower'?",
                correctAns: "Post Malone",
                wrongAns: ["Drake", "Travis Scott", "The Weeknd"]
            },
            {
                questionID: 50,
                question: "Which band is known for 'Fix You'?",
                correctAns: "Coldplay",
                wrongAns: ["Keane", "Snow Patrol", "Radiohead"]
            }
        ]
    },
    {
        category: "Sports",
        data: [
            {
                questionID: 1,
                question: "How many players are on the court for one basketball team at a time?",
                correctAns: "5",
                wrongAns: ["6", "7", "4"]
            },
            {
                questionID: 2,
                question: "Which country won the FIFA World Cup in 2018?",
                correctAns: "France",
                wrongAns: ["Brazil", "Germany", "Argentina"]
            },
            {
                questionID: 3,
                question: "How many points is a touchdown worth in football?",
                correctAns: "6",
                wrongAns: ["3", "7", "5"]
            },
            {
                questionID: 4,
                question: "Which baseball team is known as the Yankees?",
                correctAns: "New York Yankees",
                wrongAns: ["Boston Red Sox", "Chicago Cubs", "LA Dodgers"]
            },
            {
                questionID: 5,
                question: "Who is known as 'King James'?",
                correctAns: "LeBron James",
                wrongAns: ["Kevin Durant", "Stephen Curry", "Kobe Bryant"]
            },
            {
                questionID: 6,
                question: "How many innings are in a standard baseball game?",
                correctAns: "9",
                wrongAns: ["7", "10", "8"]
            },
            {
                questionID: 7,
                question: "Which player is known for 'The Hand of God' goal?",
                correctAns: "Diego Maradona",
                wrongAns: ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]
            },
            {
                questionID: 8,
                question: "How many yards is a football field?",
                correctAns: "100",
                wrongAns: ["90", "120", "110"]
            },
            {
                questionID: 9,
                question: "Which NBA team does Stephen Curry play for?",
                correctAns: "Golden State Warriors",
                wrongAns: ["Lakers", "Nets", "Bulls"]
            },
            {
                questionID: 10,
                question: "What sport uses a bat, ball, and bases?",
                correctAns: "Baseball",
                wrongAns: ["Cricket", "Tennis", "Golf"]
            },
            {
                questionID: 11,
                question: "Which country is famous for soccer club FC Barcelona?",
                correctAns: "Spain",
                wrongAns: ["Italy", "France", "Germany"]
            },
            {
                questionID: 12,
                question: "How many players are on a soccer team on the field?",
                correctAns: "11",
                wrongAns: ["10", "9", "12"]
            },
            {
                questionID: 13,
                question: "Which NFL team is based in Dallas?",
                correctAns: "Dallas Cowboys",
                wrongAns: ["Houston Texans", "Miami Dolphins", "Denver Broncos"]
            },
            {
                questionID: 14,
                question: "What is a home run worth in baseball?",
                correctAns: "At least one run",
                wrongAns: ["Two runs automatically", "Three runs always", "Zero runs"]
            },
            {
                questionID: 15,
                question: "Who has won the most NBA championships as a player?",
                correctAns: "Bill Russell",
                wrongAns: ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar"]
            },
            {
                questionID: 16,
                question: "Which country won the 2014 FIFA World Cup?",
                correctAns: "Germany",
                wrongAns: ["Brazil", "Argentina", "Spain"]
            },
            {
                questionID: 17,
                question: "How many quarters are in an NFL game?",
                correctAns: "4",
                wrongAns: ["2", "3", "5"]
            },
            {
                questionID: 18,
                question: "Which baseball position throws the ball to start play?",
                correctAns: "Pitcher",
                wrongAns: ["Catcher", "Shortstop", "First baseman"]
            },
            {
                questionID: 19,
                question: "Which NBA player is known for the 'Skyhook'?",
                correctAns: "Kareem Abdul-Jabbar",
                wrongAns: ["Magic Johnson", "Shaq", "Tim Duncan"]
            },
            {
                questionID: 20,
                question: "Which soccer player has won multiple Ballon d'Or awards?",
                correctAns: "Lionel Messi",
                wrongAns: ["Neymar", "Mbappe", "Rooney"]
            },
            {
                questionID: 21,
                question: "How many strikes equal an out in baseball?",
                correctAns: "3",
                wrongAns: ["2", "4", "5"]
            },
            {
                questionID: 22,
                question: "Which team won the first Super Bowl?",
                correctAns: "Green Bay Packers",
                wrongAns: ["Dallas Cowboys", "Patriots", "Steelers"]
            },
            {
                questionID: 23,
                question: "What is the maximum score for a single basketball shot?",
                correctAns: "3",
                wrongAns: ["2", "4", "5"]
            },
            {
                questionID: 24,
                question: "Which soccer position primarily guards the goal?",
                correctAns: "Goalkeeper",
                wrongAns: ["Defender", "Midfielder", "Forward"]
            },
            {
                questionID: 25,
                question: "Which MLB team plays at Fenway Park?",
                correctAns: "Boston Red Sox",
                wrongAns: ["Yankees", "Mets", "Cubs"]
            },
            {
                questionID: 26,
                question: "Who is known as 'The GOAT' in football (NFL)?",
                correctAns: "Tom Brady",
                wrongAns: ["Peyton Manning", "Aaron Rodgers", "Joe Montana"]
            },
            {
                questionID: 27,
                question: "How many players are on a baseball team on the field?",
                correctAns: "9",
                wrongAns: ["8", "10", "11"]
            },
            {
                questionID: 28,
                question: "Which NBA team has the most championships?",
                correctAns: "Boston Celtics",
                wrongAns: ["Lakers", "Bulls", "Warriors"]
            },
            {
                questionID: 29,
                question: "Which country is known for football club Manchester United?",
                correctAns: "England",
                wrongAns: ["Spain", "Italy", "France"]
            },
            {
                questionID: 30,
                question: "How many downs does a football team have to get a first down?",
                correctAns: "4",
                wrongAns: ["3", "5", "2"]
            },
            {
                questionID: 31,
                question: "What is a slam dunk worth in basketball?",
                correctAns: "2 points",
                wrongAns: ["3 points", "1 point", "4 points"]
            },
            {
                questionID: 32,
                question: "Which baseball team is known as the Dodgers?",
                correctAns: "Los Angeles Dodgers",
                wrongAns: ["San Francisco Giants", "Padres", "Angels"]
            },
            {
                questionID: 33,
                question: "Who is the all-time leading scorer in NBA history (as of recent years)?",
                correctAns: "LeBron James",
                wrongAns: ["Kareem Abdul-Jabbar", "Michael Jordan", "Kobe Bryant"]
            },
            {
                questionID: 34,
                question: "Which soccer tournament is held every 4 years?",
                correctAns: "FIFA World Cup",
                wrongAns: ["UEFA Champions League", "Copa America", "Premier League"]
            },
            {
                questionID: 35,
                question: "What is the term for scoring 3 goals in a soccer match?",
                correctAns: "Hat-trick",
                wrongAns: ["Triple play", "Three-peat", "Clean sheet"]
            },
            {
                questionID: 36,
                question: "Which NFL team is known as the Patriots?",
                correctAns: "New England Patriots",
                wrongAns: ["New York Giants", "Jets", "Bills"]
            },
            {
                questionID: 37,
                question: "Which baseball player is known as 'The Babe'?",
                correctAns: "Babe Ruth",
                wrongAns: ["Derek Jeter", "Barry Bonds", "Ken Griffey Jr."]
            },
            {
                questionID: 38,
                question: "How many players start on a basketball team in the NBA?",
                correctAns: "5",
                wrongAns: ["6", "7", "4"]
            },
            {
                questionID: 39,
                question: "Which soccer player is known as CR7?",
                correctAns: "Cristiano Ronaldo",
                wrongAns: ["Messi", "Neymar", "Mbappe"]
            },
            {
                questionID: 40,
                question: "How many points is a field goal worth in football?",
                correctAns: "3",
                wrongAns: ["6", "2", "1"]
            },
            {
                questionID: 41,
                question: "Which NBA team is based in Chicago?",
                correctAns: "Chicago Bulls",
                wrongAns: ["Chicago Cubs", "Detroit Pistons", "Indiana Pacers"]
            },
            {
                questionID: 42,
                question: "Which baseball league is known as MLB?",
                correctAns: "Major League Baseball",
                wrongAns: ["Minor League Baseball", "National Baseball League", "American Baseball Union"]
            },
            {
                questionID: 43,
                question: "Who won the NBA Finals MVP in 1998?",
                correctAns: "Michael Jordan",
                wrongAns: ["Scottie Pippen", "Karl Malone", "Shaq"]
            },
            {
                questionID: 44,
                question: "Which soccer club is known as Real Madrid?",
                correctAns: "Spain club",
                wrongAns: ["Italy club", "France club", "Germany club"]
            },
            {
                questionID: 45,
                question: "What is the term for a scoreless soccer game?",
                correctAns: "0-0 draw",
                wrongAns: ["Tie break", "Shutout win", "Penalty win"]
            },
            {
                questionID: 46,
                question: "Which NFL team is known as the Giants?",
                correctAns: "New York Giants",
                wrongAns: ["Dallas Cowboys", "Eagles", "Jets"]
            },
            {
                questionID: 47,
                question: "How many bases are there in baseball?",
                correctAns: "4",
                wrongAns: ["3", "5", "6"]
            },
            {
                questionID: 48,
                question: "Which NBA player is known as 'Black Mamba'?",
                correctAns: "Kobe Bryant",
                wrongAns: ["LeBron James", "Allen Iverson", "Dwyane Wade"]
            },
            {
                questionID: 49,
                question: "Which country is known for football legend Pelé?",
                correctAns: "Brazil",
                wrongAns: ["Argentina", "Portugal", "Spain"]
            },
            {
                questionID: 50,
                question: "How long is a standard soccer match?",
                correctAns: "90 minutes",
                wrongAns: ["60 minutes", "120 minutes", "75 minutes"]
            }
        ]
    },
    {
        category: "Movies",
        data: [
            {
                questionID: 1,
                question: "Who directed the movie 'Titanic'?",
                correctAns: "James Cameron",
                wrongAns: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese"]
            },
            {
                questionID: 2,
                question: "Which movie features the quote, 'I'll be back'?",
                correctAns: "The Terminator",
                wrongAns: ["Die Hard", "Predator", "RoboCop"]
            },
            {
                questionID: 3,
                question: "Who played Iron Man in the Marvel movies?",
                correctAns: "Robert Downey Jr.",
                wrongAns: ["Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]
            },
            {
                questionID: 4,
                question: "What is the name of the fictional African country in 'Black Panther'?",
                correctAns: "Wakanda",
                wrongAns: ["Zamunda", "Genosha", "Latveria"]
            },
            {
                questionID: 5,
                question: "Which movie won Best Picture at the Oscars for 1994?",
                correctAns: "Forrest Gump",
                wrongAns: ["Pulp Fiction", "The Shawshank Redemption", "Four Weddings and a Funeral"]
            },
            {
                questionID: 6,
                question: "Who played Jack in 'Titanic'?",
                correctAns: "Leonardo DiCaprio",
                wrongAns: ["Brad Pitt", "Matt Damon", "Johnny Depp"]
            },
            {
                questionID: 7,
                question: "Which movie is about toys that come to life when humans are not around?",
                correctAns: "Toy Story",
                wrongAns: ["Shrek", "Monsters, Inc.", "Finding Nemo"]
            },
            {
                questionID: 8,
                question: "What is the highest-grossing movie of all time for many years before being surpassed and later retaking the lead?",
                correctAns: "Avatar",
                wrongAns: ["Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"]
            },
            {
                questionID: 9,
                question: "Who played the Joker in 'The Dark Knight'?",
                correctAns: "Heath Ledger",
                wrongAns: ["Joaquin Phoenix", "Jared Leto", "Jack Nicholson"]
            },
            {
                questionID: 10,
                question: "Which movie franchise features the character Harry Potter?",
                correctAns: "Harry Potter",
                wrongAns: ["The Lord of the Rings", "Twilight", "The Chronicles of Narnia"]
            },
            {
                questionID: 11,
                question: "What kind of fish is Nemo in 'Finding Nemo'?",
                correctAns: "Clownfish",
                wrongAns: ["Goldfish", "Tuna", "Angelfish"]
            },
            {
                questionID: 12,
                question: "Who directed 'Jaws'?",
                correctAns: "Steven Spielberg",
                wrongAns: ["George Lucas", "Ridley Scott", "James Cameron"]
            },
            {
                questionID: 13,
                question: "Which movie features a giant shark terrorizing a beach town?",
                correctAns: "Jaws",
                wrongAns: ["Deep Blue Sea", "The Meg", "Open Water"]
            },
            {
                questionID: 14,
                question: "What is the name of the kingdom in Disney's 'Frozen'?",
                correctAns: "Arendelle",
                wrongAns: ["Corona", "Atlantica", "Agrabah"]
            },
            {
                questionID: 15,
                question: "Who played Captain Jack Sparrow?",
                correctAns: "Johnny Depp",
                wrongAns: ["Orlando Bloom", "Tom Cruise", "Brad Pitt"]
            },
            {
                questionID: 16,
                question: "Which movie features dinosaurs brought back to life in a theme park?",
                correctAns: "Jurassic Park",
                wrongAns: ["King Kong", "Godzilla", "Planet of the Apes"]
            },
            {
                questionID: 17,
                question: "What color pill does Neo take in 'The Matrix'?",
                correctAns: "Red",
                wrongAns: ["Blue", "Green", "Yellow"]
            },
            {
                questionID: 18,
                question: "Who played Elle Woods in 'Legally Blonde'?",
                correctAns: "Reese Witherspoon",
                wrongAns: ["Cameron Diaz", "Jennifer Aniston", "Sandra Bullock"]
            },
            {
                questionID: 19,
                question: "Which movie includes the character Darth Vader?",
                correctAns: "Star Wars",
                wrongAns: ["Star Trek", "Dune", "Guardians of the Galaxy"]
            },
            {
                questionID: 20,
                question: "Who directed 'Pulp Fiction'?",
                correctAns: "Quentin Tarantino",
                wrongAns: ["Martin Scorsese", "Guy Ritchie", "David Fincher"]
            },
            {
                questionID: 21,
                question: "Which movie follows a boxer named Rocky Balboa?",
                correctAns: "Rocky",
                wrongAns: ["Raging Bull", "Creed", "The Fighter"]
            },
            {
                questionID: 22,
                question: "Who played Black Widow in the Marvel movies?",
                correctAns: "Scarlett Johansson",
                wrongAns: ["Jennifer Lawrence", "Charlize Theron", "Emily Blunt"]
            },
            {
                questionID: 23,
                question: "What is the name of the lion cub in 'The Lion King'?",
                correctAns: "Simba",
                wrongAns: ["Mufasa", "Scar", "Timon"]
            },
            {
                questionID: 24,
                question: "Which movie is set on the fictional planet Pandora?",
                correctAns: "Avatar",
                wrongAns: ["Dune", "John Carter", "Interstellar"]
            },
            {
                questionID: 25,
                question: "Who played Forrest in 'Forrest Gump'?",
                correctAns: "Tom Hanks",
                wrongAns: ["Robin Williams", "Tom Cruise", "Matt Damon"]
            },
            {
                questionID: 26,
                question: "Which movie is about a theme park filled with cloned dinosaurs?",
                correctAns: "Jurassic Park",
                wrongAns: ["Godzilla", "The Lost World", "King Kong"]
            },
            {
                questionID: 27,
                question: "What is the name of the snowman in 'Frozen'?",
                correctAns: "Olaf",
                wrongAns: ["Sven", "Kristoff", "Hans"]
            },
            {
                questionID: 28,
                question: "Who directed 'E.T. the Extra-Terrestrial'?",
                correctAns: "Steven Spielberg",
                wrongAns: ["James Cameron", "George Lucas", "Tim Burton"]
            },
            {
                questionID: 29,
                question: "Which movie features the quote, 'Why so serious'?",
                correctAns: "The Dark Knight",
                wrongAns: ["Joker", "Batman Begins", "Suicide Squad"]
            },
            {
                questionID: 30,
                question: "Who played Katniss Everdeen in 'The Hunger Games'?",
                correctAns: "Jennifer Lawrence",
                wrongAns: ["Emma Stone", "Shailene Woodley", "Kristen Stewart"]
            },
            {
                questionID: 31,
                question: "Which movie franchise features the character Indiana Jones?",
                correctAns: "Indiana Jones",
                wrongAns: ["The Mummy", "National Treasure", "Mission: Impossible"]
            },
            {
                questionID: 32,
                question: "What is the name of the ogre in the movie 'Shrek'?",
                correctAns: "Shrek",
                wrongAns: ["Donkey", "Fiona", "Puss in Boots"]
            },
            {
                questionID: 33,
                question: "Who directed 'The Wolf of Wall Street'?",
                correctAns: "Martin Scorsese",
                wrongAns: ["David Fincher", "Christopher Nolan", "Oliver Stone"]
            },
            {
                questionID: 34,
                question: "Which movie features a boxer training montage and the song 'Gonna Fly Now'?",
                correctAns: "Rocky",
                wrongAns: ["Creed", "Southpaw", "Million Dollar Baby"]
            },
            {
                questionID: 35,
                question: "Who played Barbie in the 2023 movie 'Barbie'?",
                correctAns: "Margot Robbie",
                wrongAns: ["Emma Stone", "Anne Hathaway", "Sydney Sweeney"]
            },
            {
                questionID: 36,
                question: "Which movie features the characters Mike and Sulley?",
                correctAns: "Monsters, Inc.",
                wrongAns: ["Toy Story", "Cars", "Inside Out"]
            },
            {
                questionID: 37,
                question: "What is the name of the wizarding school in 'Harry Potter'?",
                correctAns: "Hogwarts",
                wrongAns: ["Beauxbatons", "Durmstrang", "Ilvermorny"]
            },
            {
                questionID: 38,
                question: "Who played Wolverine in the X-Men movies?",
                correctAns: "Hugh Jackman",
                wrongAns: ["Ryan Reynolds", "Chris Pratt", "Ben Affleck"]
            },
            {
                questionID: 39,
                question: "Which movie is about emotions living inside a girl's mind?",
                correctAns: "Inside Out",
                wrongAns: ["Soul", "Up", "Turning Red"]
            },
            {
                questionID: 40,
                question: "Who directed 'Inception'?",
                correctAns: "Christopher Nolan",
                wrongAns: ["Denis Villeneuve", "James Cameron", "Ridley Scott"]
            },
            {
                questionID: 41,
                question: "Which movie features a sinking ship and characters named Jack and Rose?",
                correctAns: "Titanic",
                wrongAns: ["The Perfect Storm", "Poseidon", "Avatar"]
            },
            {
                questionID: 42,
                question: "What is the name of the cowboy doll in 'Toy Story'?",
                correctAns: "Woody",
                wrongAns: ["Buzz", "Jessie", "Rex"]
            },
            {
                questionID: 43,
                question: "Who played Spider-Man in the 'Spider-Man: Homecoming' era movies?",
                correctAns: "Tom Holland",
                wrongAns: ["Tobey Maguire", "Andrew Garfield", "Timothée Chalamet"]
            },
            {
                questionID: 44,
                question: "Which movie features the quote, 'May the Force be with you'?",
                correctAns: "Star Wars",
                wrongAns: ["Star Trek", "Dune", "Guardians of the Galaxy"]
            },
            {
                questionID: 45,
                question: "Who played the main character in 'The Devil Wears Prada' opposite Meryl Streep?",
                correctAns: "Anne Hathaway",
                wrongAns: ["Emily Blunt", "Sandra Bullock", "Natalie Portman"]
            },
            {
                questionID: 46,
                question: "Which movie is about a man reliving the same day over and over?",
                correctAns: "Groundhog Day",
                wrongAns: ["Edge of Tomorrow", "Palm Springs", "Source Code"]
            },
            {
                questionID: 47,
                question: "Who voiced Lightning McQueen in 'Cars'?",
                correctAns: "Owen Wilson",
                wrongAns: ["Tim Allen", "Tom Hanks", "Billy Crystal"]
            },
            {
                questionID: 48,
                question: "Which movie features a clownfish searching for his son?",
                correctAns: "Finding Nemo",
                wrongAns: ["Shark Tale", "The Little Mermaid", "Moana"]
            },
            {
                questionID: 49,
                question: "Who played Maverick in 'Top Gun'?",
                correctAns: "Tom Cruise",
                wrongAns: ["Val Kilmer", "Brad Pitt", "Matt Damon"]
            },
            {
                questionID: 50,
                question: "Which movie features the house that floats away with balloons?",
                correctAns: "Up",
                wrongAns: ["Coco", "Soul", "Wall-E"]
            }
        ]
    },
    {
        category: "General Knowledge",
        data: [
            {
                questionID: 1,
                question: "What is the capital of France?",
                correctAns: "Paris",
                wrongAns: ["London", "Rome", "Berlin"]
            },
            {
                questionID: 2,
                question: "Which planet is known as the Red Planet?",
                correctAns: "Mars",
                wrongAns: ["Venus", "Jupiter", "Saturn"]
            },
            {
                questionID: 3,
                question: "Who was the first President of the United States?",
                correctAns: "George Washington",
                wrongAns: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"]
            },
            {
                questionID: 4,
                question: "What is the largest ocean on Earth?",
                correctAns: "Pacific Ocean",
                wrongAns: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
            },
            {
                questionID: 5,
                question: "Which video game features the character Mario?",
                correctAns: "Super Mario",
                wrongAns: ["Zelda", "Sonic", "Minecraft"]
            },
            {
                questionID: 6,
                question: "What is the chemical symbol for water?",
                correctAns: "H2O",
                wrongAns: ["O2", "CO2", "NaCl"]
            },
            {
                questionID: 7,
                question: "Which country is known for sushi?",
                correctAns: "Japan",
                wrongAns: ["China", "Thailand", "Korea"]
            },
            {
                questionID: 8,
                question: "Who discovered gravity (legend says via an apple)?",
                correctAns: "Isaac Newton",
                wrongAns: ["Albert Einstein", "Galileo", "Nikola Tesla"]
            },
            {
                questionID: 9,
                question: "What is the largest continent?",
                correctAns: "Asia",
                wrongAns: ["Africa", "Europe", "North America"]
            },
            {
                questionID: 10,
                question: "Which game involves building with blocks and mining resources?",
                correctAns: "Minecraft",
                wrongAns: ["Fortnite", "Roblox", "Terraria"]
            },
            {
                questionID: 11,
                question: "What gas do humans breathe in to survive?",
                correctAns: "Oxygen",
                wrongAns: ["Carbon Dioxide", "Nitrogen", "Helium"]
            },
            {
                questionID: 12,
                question: "Which country is home to the pyramids of Giza?",
                correctAns: "Egypt",
                wrongAns: ["Mexico", "India", "Peru"]
            },
            {
                questionID: 13,
                question: "What is the hardest natural substance on Earth?",
                correctAns: "Diamond",
                wrongAns: ["Gold", "Iron", "Quartz"]
            },
            {
                questionID: 14,
                question: "Which video game franchise features 'Link' as the main character?",
                correctAns: "The Legend of Zelda",
                wrongAns: ["Final Fantasy", "Halo", "Skyrim"]
            },
            {
                questionID: 15,
                question: "What is the main ingredient in guacamole?",
                correctAns: "Avocado",
                wrongAns: ["Tomato", "Pepper", "Onion"]
            },
            {
                questionID: 16,
                question: "Who painted the Mona Lisa?",
                correctAns: "Leonardo da Vinci",
                wrongAns: ["Michelangelo", "Van Gogh", "Picasso"]
            },
            {
                questionID: 17,
                question: "Which country is the largest by land area?",
                correctAns: "Russia",
                wrongAns: ["Canada", "USA", "China"]
            },
            {
                questionID: 18,
                question: "What part of the plant conducts photosynthesis?",
                correctAns: "Leaves",
                wrongAns: ["Roots", "Stem", "Flower"]
            },
            {
                questionID: 19,
                question: "Which food is traditionally associated with Italy?",
                correctAns: "Pizza",
                wrongAns: ["Sushi", "Tacos", "Curry"]
            },
            {
                questionID: 20,
                question: "Which video game is a battle royale with building mechanics?",
                correctAns: "Fortnite",
                wrongAns: ["Call of Duty", "Apex Legends", "PUBG"]
            },
            {
                questionID: 21,
                question: "What is the capital of Japan?",
                correctAns: "Tokyo",
                wrongAns: ["Seoul", "Beijing", "Bangkok"]
            },
            {
                questionID: 22,
                question: "Who wrote the Declaration of Independence?",
                correctAns: "Thomas Jefferson",
                wrongAns: ["George Washington", "Benjamin Franklin", "John Adams"]
            },
            {
                questionID: 23,
                question: "What is the boiling point of water in Celsius?",
                correctAns: "100",
                wrongAns: ["90", "80", "120"]
            },
            {
                questionID: 24,
                question: "Which video game features a battle between Spartans and aliens?",
                correctAns: "Halo",
                wrongAns: ["Destiny", "Mass Effect", "Warframe"]
            },
            {
                questionID: 25,
                question: "Which fruit is known for keeping doctors away?",
                correctAns: "Apple",
                wrongAns: ["Banana", "Orange", "Pear"]
            },
            {
                questionID: 26,
                question: "Which country is known as the Land of the Rising Sun?",
                correctAns: "Japan",
                wrongAns: ["China", "South Korea", "Thailand"]
            },
            {
                questionID: 27,
                question: "Who developed the theory of relativity?",
                correctAns: "Albert Einstein",
                wrongAns: ["Newton", "Tesla", "Hawking"]
            },
            {
                questionID: 28,
                question: "Which ocean lies between the US and Europe?",
                correctAns: "Atlantic Ocean",
                wrongAns: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean"]
            },
            {
                questionID: 29,
                question: "Which video game features creepers?",
                correctAns: "Minecraft",
                wrongAns: ["Terraria", "Fortnite", "Roblox"]
            },
            {
                questionID: 30,
                question: "What is the main ingredient in bread?",
                correctAns: "Flour",
                wrongAns: ["Rice", "Corn", "Sugar"]
            },
            {
                questionID: 31,
                question: "Which country is famous for tacos?",
                correctAns: "Mexico",
                wrongAns: ["Spain", "Brazil", "Argentina"]
            },
            {
                questionID: 32,
                question: "What is Earth’s natural satellite?",
                correctAns: "Moon",
                wrongAns: ["Sun", "Mars", "Venus"]
            },
            {
                questionID: 33,
                question: "Who was the first man to walk on the moon?",
                correctAns: "Neil Armstrong",
                wrongAns: ["Buzz Aldrin", "Yuri Gagarin", "John Glenn"]
            },
            {
                questionID: 34,
                question: "Which video game franchise features 'Master Chief'?",
                correctAns: "Halo",
                wrongAns: ["Call of Duty", "Battlefield", "Destiny"]
            },
            {
                questionID: 35,
                question: "Which country is known for pasta?",
                correctAns: "Italy",
                wrongAns: ["France", "Spain", "Greece"]
            },
            {
                questionID: 36,
                question: "What is the largest desert in the world?",
                correctAns: "Sahara",
                wrongAns: ["Gobi", "Kalahari", "Arabian"]
            },
            {
                questionID: 37,
                question: "What gas do plants absorb?",
                correctAns: "Carbon Dioxide",
                wrongAns: ["Oxygen", "Nitrogen", "Hydrogen"]
            },
            {
                questionID: 38,
                question: "Which country hosted the 2016 Summer Olympics?",
                correctAns: "Brazil",
                wrongAns: ["China", "UK", "Russia"]
            },
            {
                questionID: 39,
                question: "Which video game is about surviving zombies and crafting?",
                correctAns: "Minecraft",
                wrongAns: ["Resident Evil", "The Last of Us", "DayZ"]
            },
            {
                questionID: 40,
                question: "What is sushi traditionally wrapped in?",
                correctAns: "Seaweed",
                wrongAns: ["Lettuce", "Rice paper", "Bread"]
            },
            {
                questionID: 41,
                question: "What is the capital of Canada?",
                correctAns: "Ottawa",
                wrongAns: ["Toronto", "Vancouver", "Montreal"]
            },
            {
                questionID: 42,
                question: "Who invented the light bulb?",
                correctAns: "Thomas Edison",
                wrongAns: ["Tesla", "Einstein", "Newton"]
            },
            {
                questionID: 43,
                question: "Which country is known for the Great Wall?",
                correctAns: "China",
                wrongAns: ["Japan", "India", "Mongolia"]
            },
            {
                questionID: 44,
                question: "What is the largest mammal?",
                correctAns: "Blue whale",
                wrongAns: ["Elephant", "Giraffe", "Hippo"]
            },
            {
                questionID: 45,
                question: "Which video game features battle royale with shrinking zones?",
                correctAns: "Fortnite",
                wrongAns: ["Halo", "Overwatch", "Valorant"]
            },
            {
                questionID: 46,
                question: "What is the main ingredient in chocolate?",
                correctAns: "Cocoa",
                wrongAns: ["Vanilla", "Sugar", "Milk"]
            },
            {
                questionID: 47,
                question: "Which country is famous for croissants?",
                correctAns: "France",
                wrongAns: ["Italy", "Germany", "Spain"]
            },
            {
                questionID: 48,
                question: "What is the speed of light approximately (km/s)?",
                correctAns: "300000",
                wrongAns: ["150000", "100000", "500000"]
            },
            {
                questionID: 49,
                question: "Which video game features building and survival in a block world?",
                correctAns: "Minecraft",
                wrongAns: ["Terraria", "Roblox", "Valheim"]
            },
            {
                questionID: 50,
                question: "What is the capital of Italy?",
                correctAns: "Rome",
                wrongAns: ["Milan", "Naples", "Venice"]
            }
        ]
    }
]