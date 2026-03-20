// let button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('works')
// })
// let triviaData = [
//   {
//     category: "Music",
//     data: [
//       {
//        questionID 1,
//        question "Who is known as the King of Pop?",
//        correctAns "Michael Jackson",
//        options ["Prince", "Elvis Presley", "Justin Timberlake", "Michael Jackson"]
//       },
//       {
//        questionID 2,
//        question "Which artist released the album '21'?",
//        correctAns "Adele",
//        options ["Taylor Swift", "Rihanna", "Beyoncé", "Adele"]
//       },
//       {
//        questionID 3,
//        question "What band is known for the song 'Bohemian Rhapsody'?",
//        correctAns "Queen",
//        options ["The Beatles", "Led Zeppelin", "Pink Floyd", "Queen"]
//       },
//       {
//        questionID 4,
//        question "Who is the lead singer of U2?",
//        correctAns "Bono",
//        options ["Sting", "Freddie Mercury", "Mick Jagger", "Bono"]
//       },
//       {
//        questionID 5,
//        question "Which rapper is known as 'Slim Shady'?",
//        correctAns "Eminem",
//        options ["Drake", "Kanye West", "Jay-Z", "Eminem"]
//       },
//       {
//        questionID 6,
//        question "Which instrument has 88 keys?",
//        correctAns "Piano",
//        options ["Guitar", "Violin", "Drum", "Piano"]
//       },
//       {
//        questionID 7,
//        question "Who sang 'Shape of You'?",
//        correctAns "Ed Sheeran",
//        options ["Shawn Mendes", "Justin Bieber", "Sam Smith", "Ed Sheeran"]
//       },
//       {
//        questionID 8,
//        question "Which band released 'Smells Like Teen Spirit'?",
//        correctAns "Nirvana",
//        options ["Pearl Jam", "Green Day", "Foo Fighters", "Nirvana"]
//       },
//       {
//        questionID 9,
//        question "Who is known as the Queen of Pop?",
//        correctAns "Madonna",
//        options ["Lady Gaga", "Britney Spears", "Katy Perry", "Madonna"]
//       },
//       {
//        questionID 10,
//        question "Which artist released 'Blinding Lights'?",
//        correctAns "The Weeknd",
//        options ["Drake", "Post Malone", "Bruno Mars", "The Weeknd"]
//       },
//       {
//        questionID 11,
//        question "What band is known for 'Hey Jude'?",
//        correctAns "The Beatles",
//        options ["The Rolling Stones", "The Who", "The Kinks", "The Beatles"]
//       },
//       {
//        questionID 12,
//        question "Who sang 'Rolling in the Deep'?",
//        correctAns "Adele",
//        options ["Sia", "Amy Winehouse", "Lorde", "Adele"]
//       },
//       {
//        questionID 13,
//        question "Which artist released 'Thriller'?",
//        correctAns "Michael Jackson",
//        options ["Prince", "Stevie Wonder", "Usher", "Michael Jackson"]
//       },
//       {
//        questionID 14,
//        question "Who is the lead singer of Coldplay?",
//        correctAns "Chris Martin",
//        options ["Thom Yorke", "Brandon Flowers", "Adam Levine", "Chris Martin"]
//       },
//       {
//        questionID 15,
//        question "Which rapper released 'God's Plan'?",
//        correctAns "Drake",
//        options ["Kendrick Lamar", "J. Cole", "Travis Scott", "Drake"]
//       },
//       {
//        questionID 16,
//        question "Which singer is known for 'Firework'?",
//        correctAns "Katy Perry",
//        options ["Rihanna", "Taylor Swift", "Dua Lipa", "Katy Perry"]
//       },
//       {
//        questionID 17,
//        question "Which band is known for 'Hotel California'?",
//        correctAns "Eagles",
//        options ["Fleetwood Mac", "Journey", "Aerosmith", "Eagles"]
//       },
//       {
//        questionID 18,
//        question "Who sang 'Umbrella'?",
//        correctAns "Rihanna",
//        options ["Beyoncé", "Nicki Minaj", "Alicia Keys", "Rihanna"]
//       },
//       {
//        questionID 19,
//        question "Which artist released 'Humble'?",
//        correctAns "Kendrick Lamar",
//        options ["Drake", "Kanye West", "Lil Wayne", "Kendrick Lamar"]
//       },
//       {
//        questionID 20,
//        question "Which band is known for 'Wonderwall'?",
//        correctAns "Oasis",
//        options ["Blur", "Radiohead", "The Verve", "Oasis"]
//       },
//       {
//        questionID 21,
//        question "Who sang 'Bad Guy'?",
//        correctAns "Billie Eilish",
//        options ["Lorde", "Olivia Rodrigo", "Halsey", "Billie Eilish"]
//       },
//       {
//        questionID 22,
//        question "Which band released 'Sweet Child O' Mine'?",
//        correctAns "Guns N' Roses",
//        options ["Metallica", "AC/DC", "Bon Jovi", "Guns N' Roses"]
//       },
//       {
//        questionID 23,
//        question "Who is known for the album '1989'?",
//        correctAns "Taylor Swift",
//        options ["Ariana Grande", "Selena Gomez", "Demi Lovato", "Taylor Swift"]
//       },
//       {
//        questionID 24,
//        question "Which artist sang 'Uptown Funk'?",
//        correctAns "Bruno Mars",
//        options ["Pharrell Williams", "Justin Timberlake", "Usher", "Bruno Mars"]
//       },
//       {
//        questionID 25,
//        question "What band is known for 'Stairway to Heaven'?",
//        correctAns "Led Zeppelin",
//        options ["Pink Floyd", "The Who", "Queen", "Led Zeppelin"]
//       },
//       {
//        questionID 26,
//        question "Who sang 'Shake It Off'?",
//        correctAns "Taylor Swift",
//        options ["Katy Perry", "Lady Gaga", "Rihanna", "Taylor Swift"]
//       },
//       {
//        questionID 27,
//        question "Which rapper released 'Sicko Mode'?",
//        correctAns "Travis Scott",
//        options ["Future", "Drake", "Post Malone", "Travis Scott"]
//       },
//       {
//        questionID 28,
//        question "Which band is known for 'Clocks'?",
//        correctAns "Coldplay",
//        options ["Keane", "Snow Patrol", "Muse", "Coldplay"]
//       },
//       {
//        questionID 29,
//        question "Who sang 'Someone Like You'?",
//        correctAns "Adele",
//        options ["Sia", "Sam Smith", "Lorde", "Adele"]
//       },
//       {
//        questionID 30,
//        question "Which artist released 'Old Town Road'?",
//        correctAns "Lil Nas X",
//        options ["Post Malone", "Travis Scott", "Drake", "Lil Nas X"]
//       },
//       {
//        questionID 31,
//        question "Who is the lead singer of Maroon 5?",
//        correctAns "Adam Levine",
//        options ["Brendon Urie", "Shawn Mendes", "Charlie Puth", "Adam Levine"]
//       },
//       {
//        questionID 32,
//        question "Which band is known for 'Enter Sandman'?",
//        correctAns "Metallica",
//        options ["Slayer", "Megadeth", "Pantera", "Metallica"]
//       },
//       {
//        questionID 33,
//        question "Who sang 'Halo'?",
//        correctAns "Beyoncé",
//        options ["Rihanna", "Alicia Keys", "Whitney Houston", "Beyoncé"]
//       },
//       {
//        questionID 34,
//        question "Which artist released 'Rockstar' (2017)?",
//        correctAns "Post Malone",
//        options ["Drake", "Future", "Lil Wayne", "Post Malone"]
//       },
//       {
//        questionID 35,
//        question "Which band is known for 'Don't Stop Believin''?",
//        correctAns "Journey",
//        options ["Boston", "Foreigner", "REO Speedwagon", "Journey"]
//       },
//       {
//        questionID 36,
//        question "Who sang 'Drivers License'?",
//        correctAns "Olivia Rodrigo",
//        options ["Billie Eilish", "Dua Lipa", "Taylor Swift", "Olivia Rodrigo"]
//       },
//       {
//        questionID 37,
//        question "Which artist released 'Lose Yourself'?",
//        correctAns "Eminem",
//        options ["Drake", "Jay-Z", "Nas", "Eminem"]
//       },
//       {
//        questionID 38,
//        question "Which band is known for 'Take On Me'?",
//        correctAns "a-ha",
//        options ["Duran Duran", "Tears for Fears", "Depeche Mode", "a-ha"]
//       },
//       {
//        questionID 39,
//        question "Who sang 'Call Me Maybe'?",
//        correctAns "Carly Rae Jepsen",
//        options ["Kesha", "Lady Gaga", "Katy Perry", "Carly Rae Jepsen"]
//       },
//       {
//        questionID 40,
//        question "Which artist released 'Levitating'?",
//        correctAns "Dua Lipa",
//        options ["Ariana Grande", "Doja Cat", "SZA", "Dua Lipa"]
//       },
//       {
//        questionID 41,
//        question "Which band is known for 'Radioactive'?",
//        correctAns "Imagine Dragons",
//        options ["OneRepublic", "Coldplay", "The Killers", "Imagine Dragons"]
//       },
//       {
//        questionID 42,
//        question "Who sang 'No Tears Left to Cry'?",
//        correctAns "Ariana Grande",
//        options ["Selena Gomez", "Miley Cyrus", "Demi Lovato", "Ariana Grande"]
//       },
//       {
//        questionID 43,
//        question "Which artist released 'Stronger'?",
//        correctAns "Kanye West",
//        options ["Drake", "Kid Cudi", "Jay-Z", "Kanye West"]
//       },
//       {
//        questionID 44,
//        question "Which band is known for 'Zombie'?",
//        correctAns "The Cranberries",
//        options ["No Doubt", "Garbage", "Hole", "The Cranberries"]
//       },
//       {
//        questionID 45,
//        question "Who sang 'We Found Love'?",
//        correctAns "Rihanna",
//        options ["Beyoncé", "Sia", "Lady Gaga", "Rihanna"]
//       },
//       {
//        questionID 46,
//        question "Which artist released 'Good 4 U'?",
//        correctAns "Olivia Rodrigo",
//        options ["Billie Eilish", "Dua Lipa", "Halsey", "Olivia Rodrigo"]
//       },
//       {
//        questionID 47,
//        question "Which band is known for 'Mr. Brightside'?",
//        correctAns "The Killers",
//        options ["Arctic Monkeys", "Kings of Leon", "The Strokes", "The Killers"]
//       },
//       {
//        questionID 48,
//        question "Who sang 'Thinking Out Loud'?",
//        correctAns "Ed Sheeran",
//        options ["Sam Smith", "John Legend", "Shawn Mendes", "Ed Sheeran"]
//       },
//       {
//        questionID 49,
//        question "Which artist released 'Sunflower'?",
//        correctAns "Post Malone",
//        options ["Drake", "Travis Scott", "The Weeknd", "Post Malone"]
//       },
//       {
//        questionID 50,
//        question "Which band is known for 'Fix You'?",
//        correctAns "Coldplay",
//        options ["Keane", "Snow Patrol", "Radiohead", "Coldplay"]
//       }
//     ]
//   },
//   {
//     category: "Sports",
//     data: [
//       {
//        questionID 1,
//        question "How many players are on the court for one basketball team at a time?",
//        correctAns "5",
//        options ["6", "7", "4", "5"]
//       },
//       {
//        questionID 2,
//        question "Which country won the FIFA World Cup in 2018?",
//        correctAns "France",
//        options ["Brazil", "Germany", "Argentina", "France"]
//       },
//       {
//        questionID 3,
//        question "How many points is a touchdown worth in football?",
//        correctAns "6",
//        options ["3", "7", "5", "6"]
//       },
//       {
//        questionID 4,
//        question "Which baseball team is known as the Yankees?",
//        correctAns "New York Yankees",
//        options ["Boston Red Sox", "Chicago Cubs", "LA Dodgers", "New York Yankees"]
//       },
//       {
//        questionID 5,
//        question "Who is known as 'King James'?",
//        correctAns "LeBron James",
//        options ["Kevin Durant", "Stephen Curry", "Kobe Bryant", "LeBron James"]
//       },
//       {
//        questionID 6,
//        question "How many innings are in a standard baseball game?",
//        correctAns "9",
//        options ["7", "10", "8", "9"]
//       },
//       {
//        questionID 7,
//        question "Which player is known for 'The Hand of God' goal?",
//        correctAns "Diego Maradona",
//        options ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona"]
//       },
//       {
//        questionID 8,
//        question "How many yards is a football field?",
//        correctAns "100",
//        options ["90", "120", "110", "100"]
//       },
//       {
//        questionID 9,
//        question "Which NBA team does Stephen Curry play for?",
//        correctAns "Golden State Warriors",
//        options ["Lakers", "Nets", "Bulls", "Golden State Warriors"]
//       },
//       {
//        questionID 10,
//        question "What sport uses a bat, ball, and bases?",
//        correctAns "Baseball",
//        options ["Cricket", "Tennis", "Golf", "Baseball"]
//       },
//       {
//        questionID 11,
//        question "Which country is famous for soccer club FC Barcelona?",
//        correctAns "Spain",
//        options ["Italy", "France", "Germany", "Spain"]
//       },
//       {
//        questionID 12,
//        question "How many players are on a soccer team on the field?",
//        correctAns "11",
//        options ["10", "9", "12", "11"]
//       },
//       {
//        questionID 13,
//        question "Which NFL team is based in Dallas?",
//        correctAns "Dallas Cowboys",
//        options ["Houston Texans", "Miami Dolphins", "Denver Broncos", "Dallas Cowboys"]
//       },
//       {
//        questionID 14,
//        question "What is a home run worth in baseball?",
//        correctAns "At least one run",
//        options ["Two runs automatically", "Three runs always", "Zero runs", "At least one run"]
//       },
//       {
//        questionID 15,
//        question "Who has won the most NBA championships as a player?",
//        correctAns "Bill Russell",
//        options ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Bill Russell"]
//       },
//       {
//        questionID 16,
//        question "Which country won the 2014 FIFA World Cup?",
//        correctAns "Germany",
//        options ["Brazil", "Argentina", "Spain", "Germany"]
//       },
//       {
//        questionID 17,
//        question "How many quarters are in an NFL game?",
//        correctAns "4",
//        options ["2", "3", "5", "4"]
//       },
//       {
//        questionID 18,
//        question "Which baseball position throws the ball to start play?",
//        correctAns "Pitcher",
//        options ["Catcher", "Shortstop", "First baseman", "Pitcher"]
//       },
//       {
//        questionID 19,
//        question "Which NBA player is known for the 'Skyhook'?",
//        correctAns "Kareem Abdul-Jabbar",
//        options ["Magic Johnson", "Shaq", "Tim Duncan", "Kareem Abdul-Jabbar"]
//       },
//       {
//        questionID 20,
//        question "Which soccer player has won multiple Ballon d'Or awards?",
//        correctAns "Lionel Messi",
//        options ["Neymar", "Mbappe", "Rooney", "Lionel Messi"]
//       },
//       {
//        questionID 21,
//        question "How many strikes equal an out in baseball?",
//        correctAns "3",
//        options ["2", "4", "5", "3"]
//       },
//       {
//        questionID 22,
//        question "Which team won the first Super Bowl?",
//        correctAns "Green Bay Packers",
//        options ["Dallas Cowboys", "Patriots", "Steelers", "Green Bay Packers"]
//       },
//       {
//        questionID 23,
//        question "What is the maximum score for a single basketball shot?",
//        correctAns "3",
//        options ["2", "4", "5", "3"]
//       },
//       {
//        questionID 24,
//        question "Which soccer position primarily guards the goal?",
//        correctAns "Goalkeeper",
//        options ["Defender", "Midfielder", "Forward", "Goalkeeper"]
//       },
//       {
//        questionID 25,
//        question "Which MLB team plays at Fenway Park?",
//        correctAns "Boston Red Sox",
//        options ["Yankees", "Mets", "Cubs", "Boston Red Sox"]
//       },
//       {
//        questionID 26,
//        question "Who is known as 'The GOAT' in football (NFL)?",
//        correctAns "Tom Brady",
//        options ["Peyton Manning", "Aaron Rodgers", "Joe Montana", "Tom Brady"]
//       },
//       {
//        questionID 27,
//        question "How many players are on a baseball team on the field?",
//        correctAns "9",
//        options ["8", "10", "11", "9"]
//       },
//       {
//        questionID 28,
//        question "Which NBA team has the most championships?",
//        correctAns "Boston Celtics",
//        options ["Lakers", "Bulls", "Warriors", "Boston Celtics"]
//       },
//       {
//        questionID 29,
//        question "Which country is known for football club Manchester United?",
//        correctAns "England",
//        options ["Spain", "Italy", "France", "England"]
//       },
//       {
//        questionID 30,
//        question "How many downs does a football team have to get a first down?",
//        correctAns "4",
//        options ["3", "5", "2", "4"]
//       },
//       {
//        questionID 31,
//        question "What is a slam dunk worth in basketball?",
//        correctAns "2 points",
//        options ["3 points", "1 point", "4 points", "2 points"]
//       },
//       {
//        questionID 32,
//        question "Which baseball team is known as the Dodgers?",
//        correctAns "Los Angeles Dodgers",
//        options ["San Francisco Giants", "Padres", "Angels", "Los Angeles Dodgers"]
//       },
//       {
//        questionID 33,
//        question "Who is the all-time leading scorer in NBA history (as of recent years)?",
//        correctAns "LeBron James",
//        options ["Kareem Abdul-Jabbar", "Michael Jordan", "Kobe Bryant", "LeBron James"]
//       },
//       {
//        questionID 34,
//        question "Which soccer tournament is held every 4 years?",
//        correctAns "FIFA World Cup",
//        options ["UEFA Champions League", "Copa America", "Premier League", "FIFA World Cup"]
//       },
//       {
//        questionID 35,
//        question "What is the term for scoring 3 goals in a soccer match?",
//        correctAns "Hat-trick",
//        options ["Triple play", "Three-peat", "Clean sheet", "Hat-trick"]
//       },
//       {
//        questionID 36,
//        question "Which NFL team is known as the Patriots?",
//        correctAns "New England Patriots",
//        options ["New York Giants", "Jets", "Bills", "New England Patriots"]
//       },
//       {
//        questionID 37,
//        question "Which baseball player is known as 'The Babe'?",
//        correctAns "Babe Ruth",
//        options ["Derek Jeter", "Barry Bonds", "Ken Griffey Jr.", "Babe Ruth"]
//       },
//       {
//        questionID 38,
//        question "How many players start on a basketball team in the NBA?",
//        correctAns "5",
//        options ["6", "7", "4", "5"]
//       },
//       {
//        questionID 39,
//        question "Which soccer player is known as CR7?",
//        correctAns "Cristiano Ronaldo",
//        options ["Messi", "Neymar", "Mbappe", "Cristiano Ronaldo"]
//       },
//       {
//        questionID 40,
//        question "How many points is a field goal worth in football?",
//        correctAns "3",
//        options ["6", "2", "1", "3"]
//       },
//       {
//        questionID 41,
//        question "Which NBA team is based in Chicago?",
//        correctAns "Chicago Bulls",
//        options ["Chicago Cubs", "Detroit Pistons", "Indiana Pacers", "Chicago Bulls"]
//       },
//       {
//        questionID 42,
//        question "Which baseball league is known as MLB?",
//        correctAns "Major League Baseball",
//        options ["Minor League Baseball", "National Baseball League", "American Baseball Union", "Major League Baseball"]
//       },
//       {
//        questionID 43,
//        question "Who won the NBA Finals MVP in 1998?",
//        correctAns "Michael Jordan",
//        options ["Scottie Pippen", "Karl Malone", "Shaq", "Michael Jordan"]
//       },
//       {
//        questionID 44,
//        question "Which soccer club is known as Real Madrid?",
//        correctAns "Spain club",
//        options ["Italy club", "France club", "Germany club", "Spain club"]
//       },
//       {
//        questionID 45,
//        question "What is the term for a scoreless soccer game?",
//        correctAns "0-0 draw",
//        options ["Tie break", "Shutout win", "Penalty win", "0-0 draw"]
//       },
//       {
//        questionID 46,
//        question "Which NFL team is known as the Giants?",
//        correctAns "New York Giants",
//        options ["Dallas Cowboys", "Eagles", "Jets", "New York Giants"]
//       },
//       {
//        questionID 47,
//        question "How many bases are there in baseball?",
//        correctAns "4",
//        options ["3", "5", "6", "4"]
//       },
//       {
//        questionID 48,
//        question "Which NBA player is known as 'Black Mamba'?",
//        correctAns "Kobe Bryant",
//        options ["LeBron James", "Allen Iverson", "Dwyane Wade", "Kobe Bryant"]
//       },
//       {
//        questionID 49,
//        question "Which country is known for football legend Pelé?",
//        correctAns "Brazil",
//        options ["Argentina", "Portugal", "Spain", "Brazil"]
//       },
//       {
//        questionID 50,
//        question "How long is a standard soccer match?",
//        correctAns "90 minutes",
//        options ["60 minutes", "120 minutes", "75 minutes", "90 minutes"]
//       }
//     ]
//   },
//   {
//     category: "Movies",
//     data: [
//       {
//        questionID 1,
//        question "Who directed the movie 'Titanic'?",
//        correctAns "James Cameron",
//        options ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "James Cameron"]
//       },
//       {
//        questionID 2,
//        question "Which movie features the quote, 'I'll be back'?",
//        correctAns "The Terminator",
//        options ["Die Hard", "Predator", "RoboCop", "The Terminator"]
//       },
//       {
//        questionID 3,
//        question "Who played Iron Man in the Marvel movies?",
//        correctAns "Robert Downey Jr.",
//        options ["Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Robert Downey Jr."]
//       },
//       {
//        questionID 4,
//        question "What is the name of the fictional African country in 'Black Panther'?",
//        correctAns "Wakanda",
//        options ["Zamunda", "Genosha", "Latveria", "Wakanda"]
//       },
//       {
//        questionID 5,
//        question "Which movie won Best Picture at the Oscars for 1994?",
//        correctAns "Forrest Gump",
//        options ["Pulp Fiction", "The Shawshank Redemption", "Four Weddings and a Funeral", "Forrest Gump"]
//       },
//       {
//        questionID 6,
//        question "Who played Jack in 'Titanic'?",
//        correctAns "Leonardo DiCaprio",
//        options ["Brad Pitt", "Matt Damon", "Johnny Depp", "Leonardo DiCaprio"]
//       },
//       {
//        questionID 7,
//        question "Which movie is about toys that come to life when humans are not around?",
//        correctAns "Toy Story",
//        options ["Shrek", "Monsters, Inc.", "Finding Nemo", "Toy Story"]
//       },
//       {
//        questionID 8,
//        question "What is the highest-grossing movie of all time for many years before being surpassed and later retaking the lead?",
//        correctAns "Avatar",
//        options ["Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens", "Avatar"]
//       },
//       {
//        questionID 9,
//        question "Who played the Joker in 'The Dark Knight'?",
//        correctAns "Heath Ledger",
//        options ["Joaquin Phoenix", "Jared Leto", "Jack Nicholson", "Heath Ledger"]
//       },
//       {
//        questionID 10,
//        question "Which movie franchise features the character Harry Potter?",
//        correctAns "Harry Potter",
//        options ["The Lord of the Rings", "Twilight", "The Chronicles of Narnia", "Harry Potter"]
//       },
//       {
//        questionID 11,
//        question "What kind of fish is Nemo in 'Finding Nemo'?",
//        correctAns "Clownfish",
//        options ["Goldfish", "Tuna", "Angelfish", "Clownfish"]
//       },
//       {
//        questionID 12,
//        question "Who directed 'Jaws'?",
//        correctAns "Steven Spielberg",
//        options ["George Lucas", "Ridley Scott", "James Cameron", "Steven Spielberg"]
//       },
//       {
//        questionID 13,
//        question "Which movie features a giant shark terrorizing a beach town?",
//        correctAns "Jaws",
//        options ["Deep Blue Sea", "The Meg", "Open Water", "Jaws"]
//       },
//       {
//        questionID 14,
//        question "What is the name of the kingdom in Disney's 'Frozen'?",
//        correctAns "Arendelle",
//        options ["Corona", "Atlantica", "Agrabah", "Arendelle"]
//       },
//       {
//        questionID 15,
//        question "Who played Captain Jack Sparrow?",
//        correctAns "Johnny Depp",
//        options ["Orlando Bloom", "Tom Cruise", "Brad Pitt", "Johnny Depp"]
//       },
//       {
//        questionID 16,
//        question "Which movie features dinosaurs brought back to life in a theme park?",
//        correctAns "Jurassic Park",
//        options ["King Kong", "Godzilla", "Planet of the Apes", "Jurassic Park"]
//       },
//       {
//        questionID 17,
//        question "What color pill does Neo take in 'The Matrix'?",
//        correctAns "Red",
//        options ["Blue", "Green", "Yellow", "Red"]
//       },
//       {
//        questionID 18,
//        question "Who played Elle Woods in 'Legally Blonde'?",
//        correctAns "Reese Witherspoon",
//        options ["Cameron Diaz", "Jennifer Aniston", "Sandra Bullock", "Reese Witherspoon"]
//       },
//       {
//        questionID 19,
//        question "Which movie includes the character Darth Vader?",
//        correctAns "Star Wars",
//        options ["Star Trek", "Dune", "Guardians of the Galaxy", "Star Wars"]
//       },
//       {
//        questionID 20,
//        question "Who directed 'Pulp Fiction'?",
//        correctAns "Quentin Tarantino",
//        options ["Martin Scorsese", "Guy Ritchie", "David Fincher", "Quentin Tarantino"]
//       },
//       {
//        questionID 21,
//        question "Which movie follows a boxer named Rocky Balboa?",
//        correctAns "Rocky",
//        options ["Raging Bull", "Creed", "The Fighter", "Rocky"]
//       },
//       {
//        questionID 22,
//        question "Who played Black Widow in the Marvel movies?",
//        correctAns "Scarlett Johansson",
//        options ["Jennifer Lawrence", "Charlize Theron", "Emily Blunt", "Scarlett Johansson"]
//       },
//       {
//        questionID 23,
//        question "What is the name of the lion cub in 'The Lion King'?",
//        correctAns "Simba",
//        options ["Mufasa", "Scar", "Timon", "Simba"]
//       },
//       {
//        questionID 24,
//        question "Which movie is set on the fictional planet Pandora?",
//        correctAns "Avatar",
//        options ["Dune", "John Carter", "Interstellar", "Avatar"]
//       },
//       {
//        questionID 25,
//        question "Who played Forrest in 'Forrest Gump'?",
//        correctAns "Tom Hanks",
//        options ["Robin Williams", "Tom Cruise", "Matt Damon", "Tom Hanks"]
//       },
//       {
//        questionID 26,
//        question "Which movie is about a theme park filled with cloned dinosaurs?",
//        correctAns "Jurassic Park",
//        options ["Godzilla", "The Lost World", "King Kong", "Jurassic Park"]
//       },
//       {
//        questionID 27,
//        question "What is the name of the snowman in 'Frozen'?",
//        correctAns "Olaf",
//        options ["Sven", "Kristoff", "Hans", "Olaf"]
//       },
//       {
//        questionID 28,
//        question "Who directed 'E.T. the Extra-Terrestrial'?",
//        correctAns "Steven Spielberg",
//        options ["James Cameron", "George Lucas", "Tim Burton", "Steven Spielberg"]
//       },
//       {
//        questionID 29,
//        question "Which movie features the quote, 'Why so serious'?",
//        correctAns "The Dark Knight",
//        options ["Joker", "Batman Begins", "Suicide Squad", "The Dark Knight"]
//       },
//       {
//        questionID 30,
//        question "Who played Katniss Everdeen in 'The Hunger Games'?",
//        correctAns "Jennifer Lawrence",
//        options ["Emma Stone", "Shailene Woodley", "Kristen Stewart", "Jennifer Lawrence"]
//       },
//       {
//        questionID 31,
//        question "Which movie franchise features the character Indiana Jones?",
//        correctAns "Indiana Jones",
//        options ["The Mummy", "National Treasure", "Mission: Impossible", "Indiana Jones"]
//       },
//       {
//        questionID 32,
//        question "What is the name of the ogre in the movie 'Shrek'?",
//        correctAns "Shrek",
//        options ["Donkey", "Fiona", "Puss in Boots", "Shrek"]
//       },
//       {
//        questionID 33,
//        question "Who directed 'The Wolf of Wall Street'?",
//        correctAns "Martin Scorsese",
//        options ["David Fincher", "Christopher Nolan", "Oliver Stone", "Martin Scorsese"]
//       },
//       {
//        questionID 34,
//        question "Which movie features a boxer training montage and the song 'Gonna Fly Now'?",
//        correctAns "Rocky",
//        options ["Creed", "Southpaw", "Million Dollar Baby", "Rocky"]
//       },
//       {
//        questionID 35,
//        question "Who played Barbie in the 2023 movie 'Barbie'?",
//        correctAns "Margot Robbie",
//        options ["Emma Stone", "Anne Hathaway", "Sydney Sweeney", "Margot Robbie"]
//       },
//       {
//        questionID 36,
//        question "Which movie features the characters Mike and Sulley?",
//        correctAns "Monsters, Inc.",
//        options ["Toy Story", "Cars", "Inside Out", "Monsters, Inc."]
//       },
//       {
//        questionID 37,
//        question "What is the name of the wizarding school in 'Harry Potter'?",
//        correctAns "Hogwarts",
//        options ["Beauxbatons", "Durmstrang", "Ilvermorny", "Hogwarts"]
//       },
//       {
//        questionID 38,
//        question "Who played Wolverine in the X-Men movies?",
//        correctAns "Hugh Jackman",
//        options ["Ryan Reynolds", "Chris Pratt", "Ben Affleck", "Hugh Jackman"]
//       },
//       {
//        questionID 39,
//        question "Which movie is about emotions living inside a girl's mind?",
//        correctAns "Inside Out",
//        options ["Soul", "Up", "Turning Red", "Inside Out"]
//       },
//       {
//        questionID 40,
//        question "Who directed 'Inception'?",
//        correctAns "Christopher Nolan",
//        options ["Denis Villeneuve", "James Cameron", "Ridley Scott", "Christopher Nolan"]
//       },
//       {
//        questionID 41,
//        question "Which movie features a sinking ship and characters named Jack and Rose?",
//        correctAns "Titanic",
//        options ["The Perfect Storm", "Poseidon", "Avatar", "Titanic"]
//       },
//       {
//        questionID 42,
//        question "What is the name of the cowboy doll in 'Toy Story'?",
//        correctAns "Woody",
//        options ["Buzz", "Jessie", "Rex", "Woody"]
//       },
//       {
//        questionID 43,
//        question "Who played Spider-Man in the 'Spider-Man: Homecoming' era movies?",
//        correctAns "Tom Holland",
//        options ["Tobey Maguire", "Andrew Garfield", "Timothée Chalamet", "Tom Holland"]
//       },
//       {
//        questionID 44,
//        question "Which movie features the quote, 'May the Force be with you'?",
//        correctAns "Star Wars",
//        options ["Star Trek", "Dune", "Guardians of the Galaxy", "Star Wars"]
//       },
//       {
//        questionID 45,
//        question "Who played the main character in 'The Devil Wears Prada' opposite Meryl Streep?",
//        correctAns "Anne Hathaway",
//        options ["Emily Blunt", "Sandra Bullock", "Natalie Portman", "Anne Hathaway"]
//       },
//       {
//        questionID 46,
//        question "Which movie is about a man reliving the same day over and over?",
//        correctAns "Groundhog Day",
//        options ["Edge of Tomorrow", "Palm Springs", "Source Code", "Groundhog Day"]
//       },
//       {
//        questionID 47,
//        question "Who voiced Lightning McQueen in 'Cars'?",
//        correctAns "Owen Wilson",
//        options ["Tim Allen", "Tom Hanks", "Billy Crystal", "Owen Wilson"]
//       },
//       {
//        questionID 48,
//        question "Which movie features a clownfish searching for his son?",
//        correctAns "Finding Nemo",
//        options ["Shark Tale", "The Little Mermaid", "Moana", "Finding Nemo"]
//       },
//       {
//        questionID 49,
//        question "Who played Maverick in 'Top Gun'?",
//        correctAns "Tom Cruise",
//        options ["Val Kilmer", "Brad Pitt", "Matt Damon", "Tom Cruise"]
//       },
//       {
//        questionID 50,
//        question "Which movie features the house that floats away with balloons?",
//        correctAns "Up",
//        options ["Coco", "Soul", "Wall-E", "Up"]
//       }
//     ]
//   },
//   {
//     category: "General Knowledge",
//     data: [
//       {
//        questionID 1,
//        question "What is the capital of France?",
//        correctAns "Paris",
//        options ["London", "Rome", "Berlin", "Paris"]
//       },
//       {
//        questionID 2,
//        question "Which planet is known as the Red Planet?",
//        correctAns "Mars",
//        options ["Venus", "Jupiter", "Saturn", "Mars"]
//       },
//       {
//        questionID 3,
//        question "Who was the first President of the United States?",
//        correctAns "George Washington",
//        options ["Thomas Jefferson", "Abraham Lincoln", "John Adams", "George Washington"]
//       },
//       {
//        questionID 4,
//        question "What is the largest ocean on Earth?",
//        correctAns "Pacific Ocean",
//        options ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
//       },
//       {
//        questionID 5,
//        question "Which video game features the character Mario?",
//        correctAns "Super Mario",
//        options ["Zelda", "Sonic", "Minecraft", "Super Mario"]
//       },
//       {
//        questionID 6,
//        question "What is the chemical symbol for water?",
//        correctAns "H2O",
//        options ["O2", "CO2", "NaCl", "H2O"]
//       },
//       {
//        questionID 7,
//        question "Which country is known for sushi?",
//        correctAns "Japan",
//        options ["China", "Thailand", "Korea", "Japan"]
//       },
//       {
//        questionID 8,
//        question "Who discovered gravity (legend says via an apple)?",
//        correctAns "Isaac Newton",
//        options ["Albert Einstein", "Galileo", "Nikola Tesla", "Isaac Newton"]
//       },
//       {
//        questionID 9,
//        question "What is the largest continent?",
//        correctAns "Asia",
//        options ["Africa", "Europe", "North America", "Asia"]
//       },
//       {
//        questionID 10,
//        question "Which game involves building with blocks and mining resources?",
//        correctAns "Minecraft",
//        options ["Fortnite", "Roblox", "Terraria", "Minecraft"]
//       },
//       {
//        questionID 11,
//        question "What gas do humans breathe in to survive?",
//        correctAns "Oxygen",
//        options ["Carbon Dioxide", "Nitrogen", "Helium", "Oxygen"]
//       },
//       {
//        questionID 12,
//        question "Which country is home to the pyramids of Giza?",
//        correctAns "Egypt",
//        options ["Mexico", "India", "Peru", "Egypt"]
//       },
//       {
//        questionID 13,
//        question "What is the hardest natural substance on Earth?",
//        correctAns "Diamond",
//        options ["Gold", "Iron", "Quartz", "Diamond"]
//       },
//       {
//        questionID 14,
//        question "Which video game franchise features 'Link' as the main character?",
//        correctAns "The Legend of Zelda",
//        options ["Final Fantasy", "Halo", "Skyrim", "The Legend of Zelda"]
//       },
//       {
//        questionID 15,
//        question "What is the main ingredient in guacamole?",
//        correctAns "Avocado",
//        options ["Tomato", "Pepper", "Onion", "Avocado"]
//       },
//       {
//        questionID 16,
//        question "Who painted the Mona Lisa?",
//        correctAns "Leonardo da Vinci",
//        options ["Michelangelo", "Van Gogh", "Picasso", "Leonardo da Vinci"]
//       },
//       {
//        questionID 17,
//        question "Which country is the largest by land area?",
//        correctAns "Russia",
//        options ["Canada", "USA", "China", "Russia"]
//       },
//       {
//        questionID 18,
//        question "What part of the plant conducts photosynthesis?",
//        correctAns "Leaves",
//        options ["Roots", "Stem", "Flower", "Leaves"]
//       },
//       {
//        questionID 19,
//        question "Which food is traditionally associated with Italy?",
//        correctAns "Pizza",
//        options ["Sushi", "Tacos", "Curry", "Pizza"]
//       },
//       {
//        questionID 20,
//        question "Which video game is a battle royale with building mechanics?",
//        correctAns "Fortnite",
//        options ["Call of Duty", "Apex Legends", "PUBG", "Fortnite"]
//       },
//       {
//        questionID 21,
//        question "What is the capital of Japan?",
//        correctAns "Tokyo",
//        options ["Seoul", "Beijing", "Bangkok", "Tokyo"]
//       },
//       {
//        questionID 22,
//        question "Who wrote the Declaration of Independence?",
//        correctAns "Thomas Jefferson",
//        options ["George Washington", "Benjamin Franklin", "John Adams", "Thomas Jefferson"]
//       },
//       {
//        questionID 23,
//        question "What is the boiling point of water in Celsius?",
//        correctAns "100",
//        options ["90", "80", "120", "100"]
//       },
//       {
//        questionID 24,
//        question "Which video game features a battle between Spartans and aliens?",
//        correctAns "Halo",
//        options ["Destiny", "Mass Effect", "Warframe", "Halo"]
//       },
//       {
//        questionID 25,
//        question "Which fruit is known for keeping doctors away?",
//        correctAns "Apple",
//        options ["Banana", "Orange", "Pear", "Apple"]
//       },
//       {
//        questionID 26,
//        question "Which country is known as the Land of the Rising Sun?",
//        correctAns "Japan",
//        options ["China", "South Korea", "Thailand", "Japan"]
//       },
//       {
//        questionID 27,
//        question "Who developed the theory of relativity?",
//        correctAns "Albert Einstein",
//        options ["Newton", "Tesla", "Hawking", "Albert Einstein"]
//       },
//       {
//        questionID 28,
//        question "Which ocean lies between the US and Europe?",
//        correctAns "Atlantic Ocean",
//        options ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Atlantic Ocean"]
//       },
//       {
//        questionID 29,
//        question "Which video game features creepers?",
//        correctAns "Minecraft",
//        options ["Terraria", "Fortnite", "Roblox", "Minecraft"]
//       },
//       {
//        questionID 30,
//        question "What is the main ingredient in bread?",
//        correctAns "Flour",
//        options ["Rice", "Corn", "Sugar", "Flour"]
//       },
//       {
//        questionID 31,
//        question "Which country is famous for tacos?",
//        correctAns "Mexico",
//        options ["Spain", "Brazil", "Argentina", "Mexico"]
//       },
//       {
//        questionID 32,
//        question "What is Earth’s natural satellite?",
//        correctAns "Moon",
//        options ["Sun", "Mars", "Venus", "Moon"]
//       },
//       {
//        questionID 33,
//        question "Who was the first man to walk on the moon?",
//        correctAns "Neil Armstrong",
//        options ["Buzz Aldrin", "Yuri Gagarin", "John Glenn", "Neil Armstrong"]
//       },
//       {
//        questionID 34,
//        question "Which video game franchise features 'Master Chief'?",
//        correctAns "Halo",
//        options ["Call of Duty", "Battlefield", "Destiny", "Halo"]
//       },
//       {
//        questionID 35,
//        question "Which country is known for pasta?",
//        correctAns "Italy",
//        options ["France", "Spain", "Greece", "Italy"]
//       },
//       {
//        questionID 36,
//        question "What is the largest desert in the world?",
//        correctAns "Sahara",
//        options ["Gobi", "Kalahari", "Arabian", "Sahara"]
//       },
//       {
//        questionID 37,
//        question "What gas do plants absorb?",
//        correctAns "Carbon Dioxide",
//        options ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"]
//       },
//       {
//        questionID 38,
//        question "Which country hosted the 2016 Summer Olympics?",
//        correctAns "Brazil",
//        options ["China", "UK", "Russia", "Brazil"]
//       },
//       {
//        questionID 39,
//        question "Which video game is about surviving zombies and crafting?",
//        correctAns "Minecraft",
//        options ["Resident Evil", "The Last of Us", "DayZ", "Minecraft"]
//       },
//       {
//        questionID 40,
//        question "What is sushi traditionally wrapped in?",
//        correctAns "Seaweed",
//        options ["Lettuce", "Rice paper", "Bread", "Seaweed"]
//       },
//       {
//        questionID 41,
//        question "What is the capital of Canada?",
//        correctAns "Ottawa",
//        options ["Toronto", "Vancouver", "Montreal", "Ottawa"]
//       },
//       {
//        questionID 42,
//        question "Who invented the light bulb?",
//        correctAns "Thomas Edison",
//        options ["Tesla", "Einstein", "Newton", "Thomas Edison"]
//       },
//       {
//        questionID 43,
//        question "Which country is known for the Great Wall?",
//        correctAns "China",
//        options ["Japan", "India", "Mongolia", "China"]
//       },
//       {
//        questionID 44,
//        question "What is the largest mammal?",
//        correctAns "Blue whale",
//        options ["Elephant", "Giraffe", "Hippo", "Blue whale"]
//       },
//       {
//        questionID 45,
//        question "Which video game features battle royale with shrinking zones?",
//        correctAns "Fortnite",
//        options ["Halo", "Overwatch", "Valorant", "Fortnite"]
//       },
//       {
//        questionID 46,
//        question "What is the main ingredient in chocolate?",
//        correctAns "Cocoa",
//        options ["Vanilla", "Sugar", "Milk", "Cocoa"]
//       },
//       {
//        questionID 47,
//        question "Which country is famous for croissants?",
//        correctAns "France",
//        options ["Italy", "Germany", "Spain", "France"]
//       },
//       {
//        questionID 48,
//        question "What is the speed of light approximately (km/s)?",
//        correctAns "300000",
//        options ["150000", "100000", "500000", "300000"]
//       },
//       {
//        questionID 49,
//        question "Which video game features building and survival in a block world?",
//        correctAns "Minecraft",
//        options ["Terraria", "Roblox", "Valheim", "Minecraft"]
//       },
//       {
//        questionID 50,
//        question "What is the capital of Italy?",
//        correctAns "Rome",
//        options ["Milan", "Naples", "Venice", "Rome"]
//       }
//     ]
//   }
// ];

// triviaData = triviaData.map(categoryObj => ({
//   ...categoryObj,
//   data: categoryObj.data.map(questionObj => {
//     const shuffledOptions = [...questionObj.options];

//     for (let i = shuffledOptions.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
//     }

//     return {
//       ...questionObj,
//       options: shuffledOptions
//     };
//   })
// }));

let triviaData = [
    {
        "category": "Music",
        "data": [
            {
                questionID: 1,
                question: "Who is known as the King of Pop?",
                correctAns: "Michael Jackson",
                options: [
                    "Prince",
                    "Michael Jackson",
                    "Elvis Presley",
                    "Justin Timberlake"
                ]
            },
            {
                questionID: 2,
                question: "Which artist released the album '21'?",
                correctAns: "Adele",
                options: [
                    "Beyoncé",
                    "Adele",
                    "Rihanna",
                    "Taylor Swift"
                ]
            },
            {
                questionID: 3,
                question: "What band is known for the song 'Bohemian Rhapsody'?",
                correctAns: "Queen",
                options: [
                    "Queen",
                    "Led Zeppelin",
                    "Pink Floyd",
                    "The Beatles"
                ]
            },
            {
                questionID: 4,
                question: "Who is the lead singer of U2?",
                correctAns: "Bono",
                options: [
                    "Sting",
                    "Freddie Mercury",
                    "Mick Jagger",
                    "Bono"
                ]
            },
            {
                questionID: 5,
                question: "Which rapper is known as 'Slim Shady'?",
                correctAns: "Eminem",
                options: [
                    "Drake",
                    "Kanye West",
                    "Jay-Z",
                    "Eminem"
                ]
            },
            {
                questionID: 6,
                question: "Which instrument has 88 keys?",
                correctAns: "Piano",
                options: [
                    "Violin",
                    "Piano",
                    "Guitar",
                    "Drum"
                ]
            },
            {
                questionID: 7,
                question: "Who sang 'Shape of You'?",
                correctAns: "Ed Sheeran",
                options: [
                    "Ed Sheeran",
                    "Sam Smith",
                    "Justin Bieber",
                    "Shawn Mendes"
                ]
            },
            {
                questionID: 8,
                question: "Which band released 'Smells Like Teen Spirit'?",
                correctAns: "Nirvana",
                options: [
                    "Pearl Jam",
                    "Green Day",
                    "Nirvana",
                    "Foo Fighters"
                ]
            },
            {
                questionID: 9,
                question: "Who is known as the Queen of Pop?",
                correctAns: "Madonna",
                options: [
                    "Britney Spears",
                    "Lady Gaga",
                    "Katy Perry",
                    "Madonna"
                ]
            },
            {
                questionID: 10,
                question: "Which artist released 'Blinding Lights'?",
                correctAns: "The Weeknd",
                options: [
                    "Drake",
                    "Post Malone",
                    "The Weeknd",
                    "Bruno Mars"
                ]
            },
            {
                questionID: 11,
                question: "What band is known for 'Hey Jude'?",
                correctAns: "The Beatles",
                options: [
                    "The Rolling Stones",
                    "The Beatles",
                    "The Kinks",
                    "The Who"
                ]
            },
            {
                questionID: 12,
                question: "Who sang 'Rolling in the Deep'?",
                correctAns: "Adele",
                options: [
                    "Lorde",
                    "Sia",
                    "Amy Winehouse",
                    "Adele"
                ]
            },
            {
                questionID: 13,
                question: "Which artist released 'Thriller'?",
                correctAns: "Michael Jackson",
                options: [
                    "Usher",
                    "Michael Jackson",
                    "Stevie Wonder",
                    "Prince"
                ]
            },
            {
                questionID: 14,
                question: "Who is the lead singer of Coldplay?",
                correctAns: "Chris Martin",
                options: [
                    "Thom Yorke",
                    "Chris Martin",
                    "Adam Levine",
                    "Brandon Flowers"
                ]
            },
            {
                questionID: 15,
                question: "Which rapper released 'God's Plan'?",
                correctAns: "Drake",
                options: [
                    "J. Cole",
                    "Kendrick Lamar",
                    "Drake",
                    "Travis Scott"
                ]
            },
            {
                questionID: 16,
                question: "Which singer is known for 'Firework'?",
                correctAns: "Katy Perry",
                options: [
                    "Katy Perry",
                    "Rihanna",
                    "Taylor Swift",
                    "Dua Lipa"
                ]
            },
            {
                questionID: 17,
                question: "Which band is known for 'Hotel California'?",
                correctAns: "Eagles",
                options: [
                    "Fleetwood Mac",
                    "Eagles",
                    "Journey",
                    "Aerosmith"
                ]
            },
            {
                questionID: 18,
                question: "Who sang 'Umbrella'?",
                correctAns: "Rihanna",
                options: [
                    "Rihanna",
                    "Beyoncé",
                    "Nicki Minaj",
                    "Alicia Keys"
                ]
            },
            {
                questionID: 19,
                question: "Which artist released 'Humble'?",
                correctAns: "Kendrick Lamar",
                options: [
                    "Kendrick Lamar",
                    "Lil Wayne",
                    "Drake",
                    "Kanye West"
                ]
            },
            {
                questionID: 20,
                question: "Which band is known for 'Wonderwall'?",
                correctAns: "Oasis",
                options: [
                    "Oasis",
                    "The Verve",
                    "Blur",
                    "Radiohead"
                ]
            },
            {
                questionID: 21,
                question: "Who sang 'Bad Guy'?",
                correctAns: "Billie Eilish",
                options: [
                    "Billie Eilish",
                    "Lorde",
                    "Halsey",
                    "Olivia Rodrigo"
                ]
            },
            {
                questionID: 22,
                question: "Which band released 'Sweet Child O' Mine'?",
                correctAns: "Guns N' Roses",
                options: [
                    "AC/DC",
                    "Bon Jovi",
                    "Guns N' Roses",
                    "Metallica"
                ]
            },
            {
                questionID: 23,
                question: "Who is known for the album '1989'?",
                correctAns: "Taylor Swift",
                options: [
                    "Ariana Grande",
                    "Taylor Swift",
                    "Demi Lovato",
                    "Selena Gomez"
                ]
            },
            {
                questionID: 24,
                question: "Which artist sang 'Uptown Funk'?",
                correctAns: "Bruno Mars",
                options: [
                    "Usher",
                    "Pharrell Williams",
                    "Justin Timberlake",
                    "Bruno Mars"
                ]
            },
            {
                questionID: 25,
                question: "What band is known for 'Stairway to Heaven'?",
                correctAns: "Led Zeppelin",
                options: [
                    "Queen",
                    "The Who",
                    "Pink Floyd",
                    "Led Zeppelin"
                ]
            },
            {
                questionID: 26,
                question: "Who sang 'Shake It Off'?",
                correctAns: "Taylor Swift",
                options: [
                    "Lady Gaga",
                    "Taylor Swift",
                    "Rihanna",
                    "Katy Perry"
                ]
            },
            {
                questionID: 27,
                question: "Which rapper released 'Sicko Mode'?",
                correctAns: "Travis Scott",
                options: [
                    "Future",
                    "Post Malone",
                    "Drake",
                    "Travis Scott"
                ]
            },
            {
                questionID: 28,
                question: "Which band is known for 'Clocks'?",
                correctAns: "Coldplay",
                options: [
                    "Coldplay",
                    "Muse",
                    "Keane",
                    "Snow Patrol"
                ]
            },
            {
                questionID: 29,
                question: "Who sang 'Someone Like You'?",
                correctAns: "Adele",
                options: [
                    "Sia",
                    "Lorde",
                    "Adele",
                    "Sam Smith"
                ]
            },
            {
                questionID: 30,
                question: "Which artist released 'Old Town Road'?",
                correctAns: "Lil Nas X",
                options: [
                    "Drake",
                    "Lil Nas X",
                    "Travis Scott",
                    "Post Malone"
                ]
            },
            {
                questionID: 31,
                question: "Who is the lead singer of Maroon 5?",
                correctAns: "Adam Levine",
                options: [
                    "Adam Levine",
                    "Shawn Mendes",
                    "Charlie Puth",
                    "Brendon Urie"
                ]
            },
            {
                questionID: 32,
                question: "Which band is known for 'Enter Sandman'?",
                correctAns: "Metallica",
                options: [
                    "Pantera",
                    "Megadeth",
                    "Metallica",
                    "Slayer"
                ]
            },
            {
                questionID: 33,
                question: "Who sang 'Halo'?",
                correctAns: "Beyoncé",
                options: [
                    "Beyoncé",
                    "Alicia Keys",
                    "Rihanna",
                    "Whitney Houston"
                ]
            },
            {
                questionID: 34,
                question: "Which artist released 'Rockstar' (2017)?",
                correctAns: "Post Malone",
                options: [
                    "Post Malone",
                    "Lil Wayne",
                    "Drake",
                    "Future"
                ]
            },
            {
                questionID: 35,
                question: "Which band is known for 'Don't Stop Believin''?",
                correctAns: "Journey",
                options: [
                    "Journey",
                    "Boston",
                    "Foreigner",
                    "REO Speedwagon"
                ]
            },
            {
                questionID: 36,
                question: "Who sang 'Drivers License'?",
                correctAns: "Olivia Rodrigo",
                options: [
                    "Taylor Swift",
                    "Dua Lipa",
                    "Billie Eilish",
                    "Olivia Rodrigo"
                ]
            },
            {
                questionID: 37,
                question: "Which artist released 'Lose Yourself'?",
                correctAns: "Eminem",
                options: [
                    "Eminem",
                    "Jay-Z",
                    "Drake",
                    "Nas"
                ]
            },
            {
                questionID: 38,
                question: "Which band is known for 'Take On Me'?",
                correctAns: "a-ha",
                options: [
                    "a-ha",
                    "Depeche Mode",
                    "Duran Duran",
                    "Tears for Fears"
                ]
            },
            {
                questionID: 39,
                question: "Who sang 'Call Me Maybe'?",
                correctAns: "Carly Rae Jepsen",
                options: [
                    "Lady Gaga",
                    "Carly Rae Jepsen",
                    "Kesha",
                    "Katy Perry"
                ]
            },
            {
                questionID: 40,
                question: "Which artist released 'Levitating'?",
                correctAns: "Dua Lipa",
                options: [
                    "Ariana Grande",
                    "SZA",
                    "Dua Lipa",
                    "Doja Cat"
                ]
            },
            {
                questionID: 41,
                question: "Which band is known for 'Radioactive'?",
                correctAns: "Imagine Dragons",
                options: [
                    "OneRepublic",
                    "Coldplay",
                    "Imagine Dragons",
                    "The Killers"
                ]
            },
            {
                questionID: 42,
                question: "Who sang 'No Tears Left to Cry'?",
                correctAns: "Ariana Grande",
                options: [
                    "Demi Lovato",
                    "Miley Cyrus",
                    "Selena Gomez",
                    "Ariana Grande"
                ]
            },
            {
                questionID: 43,
                question: "Which artist released 'Stronger'?",
                correctAns: "Kanye West",
                options: [
                    "Kanye West",
                    "Kid Cudi",
                    "Jay-Z",
                    "Drake"
                ]
            },
            {
                questionID: 44,
                question: "Which band is known for 'Zombie'?",
                correctAns: "The Cranberries",
                options: [
                    "The Cranberries",
                    "Garbage",
                    "No Doubt",
                    "Hole"
                ]
            },
            {
                questionID: 45,
                question: "Who sang 'We Found Love'?",
                correctAns: "Rihanna",
                options: [
                    "Beyoncé",
                    "Lady Gaga",
                    "Sia",
                    "Rihanna"
                ]
            },
            {
                questionID: 46,
                question: "Which artist released 'Good 4 U'?",
                correctAns: "Olivia Rodrigo",
                options: [
                    "Halsey",
                    "Billie Eilish",
                    "Olivia Rodrigo",
                    "Dua Lipa"
                ]
            },
            {
                questionID: 47,
                question: "Which band is known for 'Mr. Brightside'?",
                correctAns: "The Killers",
                options: [
                    "Arctic Monkeys",
                    "The Killers",
                    "The Strokes",
                    "Kings of Leon"
                ]
            },
            {
                questionID: 48,
                question: "Who sang 'Thinking Out Loud'?",
                correctAns: "Ed Sheeran",
                options: [
                    "Sam Smith",
                    "Shawn Mendes",
                    "John Legend",
                    "Ed Sheeran"
                ]
            },
            {
                questionID: 49,
                question: "Which artist released 'Sunflower'?",
                correctAns: "Post Malone",
                options: [
                    "The Weeknd",
                    "Drake",
                    "Travis Scott",
                    "Post Malone"
                ]
            },
            {
                questionID: 50,
                question: "Which band is known for 'Fix You'?",
                correctAns: "Coldplay",
                options: [
                    "Radiohead",
                    "Coldplay",
                    "Snow Patrol",
                    "Keane"
                ]
            }
        ]
    },
    {
        "category": "Sports",
        "data": [
            {
                questionID: 1,
                question: "How many players are on the court for one basketball team at a time?",
                correctAns: "5",
                options: [
                    "6",
                    "7",
                    "4",
                    "5"
                ]
            },
            {
                questionID: 2,
                question: "Which country won the FIFA World Cup in 2018?",
                correctAns: "France",
                options: [
                    "Brazil",
                    "Germany",
                    "Argentina",
                    "France"
                ]
            },
            {
                questionID: 3,
                question: "How many points is a touchdown worth in football?",
                correctAns: "6",
                options: [
                    "3",
                    "7",
                    "5",
                    "6"
                ]
            },
            {
                questionID: 4,
                question: "Which baseball team is known as the Yankees?",
                correctAns: "New York Yankees",
                options: [
                    "LA Dodgers",
                    "New York Yankees",
                    "Boston Red Sox",
                    "Chicago Cubs"
                ]
            },
            {
                questionID: 5,
                question: "Who is known as 'King James'?",
                correctAns: "LeBron James",
                options: [
                    "Stephen Curry",
                    "Kevin Durant",
                    "LeBron James",
                    "Kobe Bryant"
                ]
            },
            {
                questionID: 6,
                question: "How many innings are in a standard baseball game?",
                correctAns: "9",
                options: [
                    "9",
                    "10",
                    "8",
                    "7"
                ]
            },
            {
                questionID: 7,
                question: "Which player is known for 'The Hand of God' goal?",
                correctAns: "Diego Maradona",
                options: [
                    "Cristiano Ronaldo",
                    "Lionel Messi",
                    "Pelé",
                    "Diego Maradona"
                ]
            },
            {
                questionID: 8,
                question: "How many yards is a football field?",
                correctAns: "100",
                options: [
                    "110",
                    "120",
                    "90",
                    "100"
                ]
            },
            {
                questionID: 9,
                question: "Which NBA team does Stephen Curry play for?",
                correctAns: "Golden State Warriors",
                options: [
                    "Nets",
                    "Lakers",
                    "Golden State Warriors",
                    "Bulls"
                ]
            },
            {
                questionID: 10,
                question: "What sport uses a bat, ball, and bases?",
                correctAns: "Baseball",
                options: [
                    "Cricket",
                    "Golf",
                    "Tennis",
                    "Baseball"
                ]
            },
            {
                questionID: 11,
                question: "Which country is famous for soccer club FC Barcelona?",
                correctAns: "Spain",
                options: [
                    "France",
                    "Spain",
                    "Italy",
                    "Germany"
                ]
            },
            {
                questionID: 12,
                question: "How many players are on a soccer team on the field?",
                correctAns: "11",
                options: [
                    "11",
                    "10",
                    "12",
                    "9"
                ]
            },
            {
                questionID: 13,
                question: "Which NFL team is based in Dallas?",
                correctAns: "Dallas Cowboys",
                options: [
                    "Miami Dolphins",
                    "Denver Broncos",
                    "Houston Texans",
                    "Dallas Cowboys"
                ]
            },
            {
                questionID: 14,
                question: "What is a home run worth in baseball?",
                correctAns: "At least one run",
                options: [
                    "Two runs automatically",
                    "At least one run",
                    "Three runs always",
                    "Zero runs"
                ]
            },
            {
                questionID: 15,
                question: "Who has won the most NBA championships as a player?",
                correctAns: "Bill Russell",
                options: [
                    "Bill Russell",
                    "LeBron James",
                    "Michael Jordan",
                    "Kareem Abdul-Jabbar"
                ]
            },
            {
                questionID: 16,
                question: "Which country won the 2014 FIFA World Cup?",
                correctAns: "Germany",
                options: [
                    "Argentina",
                    "Spain",
                    "Germany",
                    "Brazil"
                ]
            },
            {
                questionID: 17,
                question: "How many quarters are in an NFL game?",
                correctAns: "4",
                options: [
                    "2",
                    "5",
                    "3",
                    "4"
                ]
            },
            {
                questionID: 18,
                question: "Which baseball position throws the ball to start play?",
                correctAns: "Pitcher",
                options: [
                    "Pitcher",
                    "Shortstop",
                    "First baseman",
                    "Catcher"
                ]
            },
            {
                questionID: 19,
                question: "Which NBA player is known for the 'Skyhook'?",
                correctAns: "Kareem Abdul-Jabbar",
                options: [
                    "Tim Duncan",
                    "Shaq",
                    "Magic Johnson",
                    "Kareem Abdul-Jabbar"
                ]
            },
            {
                questionID: 20,
                question: "Which soccer player has won multiple Ballon d'Or awards?",
                correctAns: "Lionel Messi",
                options: [
                    "Mbappe",
                    "Neymar",
                    "Rooney",
                    "Lionel Messi"
                ]
            },
            {
                questionID: 21,
                question: "How many strikes equal an out in baseball?",
                correctAns: "3",
                options: [
                    "2",
                    "4",
                    "5",
                    "3"
                ]
            },
            {
                questionID: 22,
                question: "Which team won the first Super Bowl?",
                correctAns: "Green Bay Packers",
                options: [
                    "Steelers",
                    "Green Bay Packers",
                    "Patriots",
                    "Dallas Cowboys"
                ]
            },
            {
                questionID: 23,
                question: "What is the maximum score for a single basketball shot?",
                correctAns: "3",
                options: [
                    "3",
                    "5",
                    "4",
                    "2"
                ]
            },
            {
                questionID: 24,
                question: "Which soccer position primarily guards the goal?",
                correctAns: "Goalkeeper",
                options: [
                    "Goalkeeper",
                    "Defender",
                    "Forward",
                    "Midfielder"
                ]
            },
            {
                questionID: 25,
                question: "Which MLB team plays at Fenway Park?",
                correctAns: "Boston Red Sox",
                options: [
                    "Cubs",
                    "Mets",
                    "Yankees",
                    "Boston Red Sox"
                ]
            },
            {
                questionID: 26,
                question: "Who is known as 'The GOAT' in football (NFL)?",
                correctAns: "Tom Brady",
                options: [
                    "Joe Montana",
                    "Tom Brady",
                    "Aaron Rodgers",
                    "Peyton Manning"
                ]
            },
            {
                questionID: 27,
                question: "How many players are on a baseball team on the field?",
                correctAns: "9",
                options: [
                    "8",
                    "9",
                    "11",
                    "10"
                ]
            },
            {
                questionID: 28,
                question: "Which NBA team has the most championships?",
                correctAns: "Boston Celtics",
                options: [
                    "Lakers",
                    "Boston Celtics",
                    "Warriors",
                    "Bulls"
                ]
            },
            {
                questionID: 29,
                question: "Which country is known for football club Manchester United?",
                correctAns: "England",
                options: [
                    "England",
                    "Italy",
                    "Spain",
                    "France"
                ]
            },
            {
                questionID: 30,
                question: "How many downs does a football team have to get a first down?",
                correctAns: "4",
                options: [
                    "2",
                    "3",
                    "5",
                    "4"
                ]
            },
            {
                questionID: 31,
                question: "What is a slam dunk worth in basketball?",
                correctAns: "2 points",
                options: [
                    "4 points",
                    "3 points",
                    "1 point",
                    "2 points"
                ]
            },
            {
                questionID: 32,
                question: "Which baseball team is known as the Dodgers?",
                correctAns: "Los Angeles Dodgers",
                options: [
                    "Los Angeles Dodgers",
                    "Padres",
                    "San Francisco Giants",
                    "Angels"
                ]
            },
            {
                questionID: 33,
                question: "Who is the all-time leading scorer in NBA history (as of recent years)?",
                correctAns: "LeBron James",
                options: [
                    "Kareem Abdul-Jabbar",
                    "LeBron James",
                    "Kobe Bryant",
                    "Michael Jordan"
                ]
            },
            {
                questionID: 34,
                question: "Which soccer tournament is held every 4 years?",
                correctAns: "FIFA World Cup",
                options: [
                    "FIFA World Cup",
                    "UEFA Champions League",
                    "Copa America",
                    "Premier League"
                ]
            },
            {
                questionID: 35,
                question: "What is the term for scoring 3 goals in a soccer match?",
                correctAns: "Hat-trick",
                options: [
                    "Three-peat",
                    "Triple play",
                    "Clean sheet",
                    "Hat-trick"
                ]
            },
            {
                questionID: 36,
                question: "Which NFL team is known as the Patriots?",
                correctAns: "New England Patriots",
                options: [
                    "New England Patriots",
                    "Jets",
                    "New York Giants",
                    "Bills"
                ]
            },
            {
                questionID: 37,
                question: "Which baseball player is known as 'The Babe'?",
                correctAns: "Babe Ruth",
                options: [
                    "Derek Jeter",
                    "Ken Griffey Jr.",
                    "Barry Bonds",
                    "Babe Ruth"
                ]
            },
            {
                questionID: 38,
                question: "How many players start on a basketball team in the NBA?",
                correctAns: "5",
                options: [
                    "5",
                    "6",
                    "4",
                    "7"
                ]
            },
            {
                questionID: 39,
                question: "Which soccer player is known as CR7?",
                correctAns: "Cristiano Ronaldo",
                options: [
                    "Mbappe",
                    "Neymar",
                    "Cristiano Ronaldo",
                    "Messi"
                ]
            },
            {
                questionID: 40,
                question: "How many points is a field goal worth in football?",
                correctAns: "3",
                options: [
                    "3",
                    "1",
                    "6",
                    "2"
                ]
            },
            {
                questionID: 41,
                question: "Which NBA team is based in Chicago?",
                correctAns: "Chicago Bulls",
                options: [
                    "Indiana Pacers",
                    "Chicago Cubs",
                    "Detroit Pistons",
                    "Chicago Bulls"
                ]
            },
            {
                questionID: 42,
                question: "Which baseball league is known as MLB?",
                correctAns: "Major League Baseball",
                options: [
                    "Minor League Baseball",
                    "National Baseball League",
                    "American Baseball Union",
                    "Major League Baseball"
                ]
            },
            {
                questionID: 43,
                question: "Who won the NBA Finals MVP in 1998?",
                correctAns: "Michael Jordan",
                options: [
                    "Scottie Pippen",
                    "Shaq",
                    "Karl Malone",
                    "Michael Jordan"
                ]
            },
            {
                questionID: 44,
                question: "Which soccer club is known as Real Madrid?",
                correctAns: "Spain club",
                options: [
                    "Spain club",
                    "Italy club",
                    "France club",
                    "Germany club"
                ]
            },
            {
                questionID: 45,
                question: "What is the term for a scoreless soccer game?",
                correctAns: "0-0 draw",
                options: [
                    "Shutout win",
                    "0-0 draw",
                    "Penalty win",
                    "Tie break"
                ]
            },
            {
                questionID: 46,
                question: "Which NFL team is known as the Giants?",
                correctAns: "New York Giants",
                options: [
                    "Eagles",
                    "Jets",
                    "Dallas Cowboys",
                    "New York Giants"
                ]
            },
            {
                questionID: 47,
                question: "How many bases are there in baseball?",
                correctAns: "4",
                options: [
                    "6",
                    "4",
                    "5",
                    "3"
                ]
            },
            {
                questionID: 48,
                question: "Which NBA player is known as 'Black Mamba'?",
                correctAns: "Kobe Bryant",
                options: [
                    "Allen Iverson",
                    "Dwyane Wade",
                    "Kobe Bryant",
                    "LeBron James"
                ]
            },
            {
                questionID: 49,
                question: "Which country is known for football legend Pelé?",
                correctAns: "Brazil",
                options: [
                    "Portugal",
                    "Argentina",
                    "Brazil",
                    "Spain"
                ]
            },
            {
                questionID: 50,
                question: "How long is a standard soccer match?",
                correctAns: "90 minutes",
                options: [
                    "90 minutes",
                    "75 minutes",
                    "60 minutes",
                    "120 minutes"
                ]
            }
        ]
    },
    {
        "category": "Movies",
        "data": [
            {
                questionID: 1,
                question: "Who directed the movie 'Titanic'?",
                correctAns: "James Cameron",
                options: [
                    "Martin Scorsese",
                    "Christopher Nolan",
                    "James Cameron",
                    "Steven Spielberg"
                ]
            },
            {
                questionID: 2,
                question: "Which movie features the quote, 'I'll be back'?",
                correctAns: "The Terminator",
                options: [
                    "Predator",
                    "Die Hard",
                    "The Terminator",
                    "RoboCop"
                ]
            },
            {
                questionID: 3,
                question: "Who played Iron Man in the Marvel movies?",
                correctAns: "Robert Downey Jr.",
                options: [
                    "Chris Evans",
                    "Chris Hemsworth",
                    "Robert Downey Jr.",
                    "Mark Ruffalo"
                ]
            },
            {
                questionID: 4,
                question: "What is the name of the fictional African country in 'Black Panther'?",
                correctAns: "Wakanda",
                options: [
                    "Zamunda",
                    "Wakanda",
                    "Genosha",
                    "Latveria"
                ]
            },
            {
                questionID: 5,
                question: "Which movie won Best Picture at the Oscars for 1994?",
                correctAns: "Forrest Gump",
                options: [
                    "Four Weddings and a Funeral",
                    "The Shawshank Redemption",
                    "Pulp Fiction",
                    "Forrest Gump"
                ]
            },
            {
                questionID: 6,
                question: "Who played Jack in 'Titanic'?",
                correctAns: "Leonardo DiCaprio",
                options: [
                    "Leonardo DiCaprio",
                    "Johnny Depp",
                    "Brad Pitt",
                    "Matt Damon"
                ]
            },
            {
                questionID: 7,
                question: "Which movie is about toys that come to life when humans are not around?",
                correctAns: "Toy Story",
                options: [
                    "Monsters, Inc.",
                    "Finding Nemo",
                    "Toy Story",
                    "Shrek"
                ]
            },
            {
                questionID: 8,
                question: "What is the highest-grossing movie of all time for many years before being surpassed and later retaking the lead?",
                correctAns: "Avatar",
                options: [
                    "Star Wars: The Force Awakens",
                    "Avatar",
                    "Avengers: Endgame",
                    "Titanic"
                ]
            },
            {
                questionID: 9,
                question: "Who played the Joker in 'The Dark Knight'?",
                correctAns: "Heath Ledger",
                options: [
                    "Jared Leto",
                    "Joaquin Phoenix",
                    "Jack Nicholson",
                    "Heath Ledger"
                ]
            },
            {
                questionID: 10,
                question: "Which movie franchise features the character Harry Potter?",
                correctAns: "Harry Potter",
                options: [
                    "The Lord of the Rings",
                    "Twilight",
                    "Harry Potter",
                    "The Chronicles of Narnia"
                ]
            },
            {
                questionID: 11,
                question: "What kind of fish is Nemo in 'Finding Nemo'?",
                correctAns: "Clownfish",
                options: [
                    "Angelfish",
                    "Goldfish",
                    "Tuna",
                    "Clownfish"
                ]
            },
            {
                questionID: 12,
                question: "Who directed 'Jaws'?",
                correctAns: "Steven Spielberg",
                options: [
                    "George Lucas",
                    "Ridley Scott",
                    "Steven Spielberg",
                    "James Cameron"
                ]
            },
            {
                questionID: 13,
                question: "Which movie features a giant shark terrorizing a beach town?",
                correctAns: "Jaws",
                options: [
                    "Jaws",
                    "Deep Blue Sea",
                    "Open Water",
                    "The Meg"
                ]
            },
            {
                questionID: 14,
                question: "What is the name of the kingdom in Disney's 'Frozen'?",
                correctAns: "Arendelle",
                options: [
                    "Arendelle",
                    "Agrabah",
                    "Corona",
                    "Atlantica"
                ]
            },
            {
                questionID: 15,
                question: "Who played Captain Jack Sparrow?",
                correctAns: "Johnny Depp",
                options: [
                    "Brad Pitt",
                    "Orlando Bloom",
                    "Johnny Depp",
                    "Tom Cruise"
                ]
            },
            {
                questionID: 16,
                question: "Which movie features dinosaurs brought back to life in a theme park?",
                correctAns: "Jurassic Park",
                options: [
                    "Godzilla",
                    "King Kong",
                    "Planet of the Apes",
                    "Jurassic Park"
                ]
            },
            {
                questionID: 17,
                question: "What color pill does Neo take in 'The Matrix'?",
                correctAns: "Red",
                options: [
                    "Yellow",
                    "Red",
                    "Blue",
                    "Green"
                ]
            },
            {
                questionID: 18,
                question: "Who played Elle Woods in 'Legally Blonde'?",
                correctAns: "Reese Witherspoon",
                options: [
                    "Jennifer Aniston",
                    "Cameron Diaz",
                    "Sandra Bullock",
                    "Reese Witherspoon"
                ]
            },
            {
                questionID: 19,
                question: "Which movie includes the character Darth Vader?",
                correctAns: "Star Wars",
                options: [
                    "Guardians of the Galaxy",
                    "Star Trek",
                    "Star Wars",
                    "Dune"
                ]
            },
            {
                questionID: 20,
                question: "Who directed 'Pulp Fiction'?",
                correctAns: "Quentin Tarantino",
                options: [
                    "Martin Scorsese",
                    "David Fincher",
                    "Quentin Tarantino",
                    "Guy Ritchie"
                ]
            },
            {
                questionID: 21,
                question: "Which movie follows a boxer named Rocky Balboa?",
                correctAns: "Rocky",
                options: [
                    "Creed",
                    "The Fighter",
                    "Rocky",
                    "Raging Bull"
                ]
            },
            {
                questionID: 22,
                question: "Who played Black Widow in the Marvel movies?",
                correctAns: "Scarlett Johansson",
                options: [
                    "Charlize Theron",
                    "Emily Blunt",
                    "Jennifer Lawrence",
                    "Scarlett Johansson"
                ]
            },
            {
                questionID: 23,
                question: "What is the name of the lion cub in 'The Lion King'?",
                correctAns: "Simba",
                options: [
                    "Simba",
                    "Scar",
                    "Mufasa",
                    "Timon"
                ]
            },
            {
                questionID: 24,
                question: "Which movie is set on the fictional planet Pandora?",
                correctAns: "Avatar",
                options: [
                    "Interstellar",
                    "Dune",
                    "Avatar",
                    "John Carter"
                ]
            },
            {
                questionID: 25,
                question: "Who played Forrest in 'Forrest Gump'?",
                correctAns: "Tom Hanks",
                options: [
                    "Tom Hanks",
                    "Matt Damon",
                    "Tom Cruise",
                    "Robin Williams"
                ]
            },
            {
                questionID: 26,
                question: "Which movie is about a theme park filled with cloned dinosaurs?",
                correctAns: "Jurassic Park",
                options: [
                    "King Kong",
                    "The Lost World",
                    "Jurassic Park",
                    "Godzilla"
                ]
            },
            {
                questionID: 27,
                question: "What is the name of the snowman in 'Frozen'?",
                correctAns: "Olaf",
                options: [
                    "Hans",
                    "Sven",
                    "Kristoff",
                    "Olaf"
                ]
            },
            {
                questionID: 28,
                question: "Who directed 'E.T. the Extra-Terrestrial'?",
                correctAns: "Steven Spielberg",
                options: [
                    "Steven Spielberg",
                    "Tim Burton",
                    "George Lucas",
                    "James Cameron"
                ]
            },
            {
                questionID: 29,
                question: "Which movie features the quote, 'Why so serious'?",
                correctAns: "The Dark Knight",
                options: [
                    "The Dark Knight",
                    "Suicide Squad",
                    "Batman Begins",
                    "Joker"
                ]
            },
            {
                questionID: 30,
                question: "Who played Katniss Everdeen in 'The Hunger Games'?",
                correctAns: "Jennifer Lawrence",
                options: [
                    "Emma Stone",
                    "Jennifer Lawrence",
                    "Shailene Woodley",
                    "Kristen Stewart"
                ]
            },
            {
                questionID: 31,
                question: "Which movie franchise features the character Indiana Jones?",
                correctAns: "Indiana Jones",
                options: [
                    "Indiana Jones",
                    "Mission: Impossible",
                    "National Treasure",
                    "The Mummy"
                ]
            },
            {
                questionID: 32,
                question: "What is the name of the ogre in the movie 'Shrek'?",
                correctAns: "Shrek",
                options: [
                    "Donkey",
                    "Puss in Boots",
                    "Shrek",
                    "Fiona"
                ]
            },
            {
                questionID: 33,
                question: "Who directed 'The Wolf of Wall Street'?",
                correctAns: "Martin Scorsese",
                options: [
                    "Christopher Nolan",
                    "David Fincher",
                    "Oliver Stone",
                    "Martin Scorsese"
                ]
            },
            {
                questionID: 34,
                question: "Which movie features a boxer training montage and the song 'Gonna Fly Now'?",
                correctAns: "Rocky",
                options: [
                    "Southpaw",
                    "Million Dollar Baby",
                    "Rocky",
                    "Creed"
                ]
            },
            {
                questionID: 35,
                question: "Who played Barbie in the 2023 movie 'Barbie'?",
                correctAns: "Margot Robbie",
                options: [
                    "Sydney Sweeney",
                    "Anne Hathaway",
                    "Emma Stone",
                    "Margot Robbie"
                ]
            },
            {
                questionID: 36,
                question: "Which movie features the characters Mike and Sulley?",
                correctAns: "Monsters, Inc.",
                options: [
                    "Cars",
                    "Inside Out",
                    "Toy Story",
                    "Monsters, Inc."
                ]
            },
            {
                questionID: 37,
                question: "What is the name of the wizarding school in 'Harry Potter'?",
                correctAns: "Hogwarts",
                options: [
                    "Durmstrang",
                    "Hogwarts",
                    "Beauxbatons",
                    "Ilvermorny"
                ]
            },
            {
                questionID: 38,
                question: "Who played Wolverine in the X-Men movies?",
                correctAns: "Hugh Jackman",
                options: [
                    "Chris Pratt",
                    "Ben Affleck",
                    "Hugh Jackman",
                    "Ryan Reynolds"
                ]
            },
            {
                questionID: 39,
                question: "Which movie is about emotions living inside a girl's mind?",
                correctAns: "Inside Out",
                options: [
                    "Soul",
                    "Inside Out",
                    "Turning Red",
                    "Up"
                ]
            },
            {
                questionID: 40,
                question: "Who directed 'Inception'?",
                correctAns: "Christopher Nolan",
                options: [
                    "Christopher Nolan",
                    "Ridley Scott",
                    "James Cameron",
                    "Denis Villeneuve"
                ]
            },
            {
                questionID: 41,
                question: "Which movie features a sinking ship and characters named Jack and Rose?",
                correctAns: "Titanic",
                options: [
                    "Poseidon",
                    "The Perfect Storm",
                    "Avatar",
                    "Titanic"
                ]
            },
            {
                questionID: 42,
                question: "What is the name of the cowboy doll in 'Toy Story'?",
                correctAns: "Woody",
                options: [
                    "Woody",
                    "Rex",
                    "Jessie",
                    "Buzz"
                ]
            },
            {
                questionID: 43,
                question: "Who played Spider-Man in the 'Spider-Man: Homecoming' era movies?",
                correctAns: "Tom Holland",
                options: [
                    "Tom Holland",
                    "Tobey Maguire",
                    "Andrew Garfield",
                    "Timothée Chalamet"
                ]
            },
            {
                questionID: 44,
                question: "Which movie features the quote, 'May the Force be with you'?",
                correctAns: "Star Wars",
                options: [
                    "Guardians of the Galaxy",
                    "Star Trek",
                    "Dune",
                    "Star Wars"
                ]
            },
            {
                questionID: 45,
                question: "Who played the main character in 'The Devil Wears Prada' opposite Meryl Streep?",
                correctAns: "Anne Hathaway",
                options: [
                    "Anne Hathaway",
                    "Emily Blunt",
                    "Natalie Portman",
                    "Sandra Bullock"
                ]
            },
            {
                questionID: 46,
                question: "Which movie is about a man reliving the same day over and over?",
                correctAns: "Groundhog Day",
                options: [
                    "Groundhog Day",
                    "Edge of Tomorrow",
                    "Source Code",
                    "Palm Springs"
                ]
            },
            {
                questionID: 47,
                question: "Who voiced Lightning McQueen in 'Cars'?",
                correctAns: "Owen Wilson",
                options: [
                    "Owen Wilson",
                    "Tom Hanks",
                    "Billy Crystal",
                    "Tim Allen"
                ]
            },
            {
                questionID: 48,
                question: "Which movie features a clownfish searching for his son?",
                correctAns: "Finding Nemo",
                options: [
                    "Shark Tale",
                    "Moana",
                    "Finding Nemo",
                    "The Little Mermaid"
                ]
            },
            {
                questionID: 49,
                question: "Who played Maverick in 'Top Gun'?",
                correctAns: "Tom Cruise",
                options: [
                    "Brad Pitt",
                    "Val Kilmer",
                    "Matt Damon",
                    "Tom Cruise"
                ]
            },
            {
                questionID: 50,
                question: "Which movie features the house that floats away with balloons?",
                correctAns: "Up",
                options: [
                    "Soul",
                    "Wall-E",
                    "Up",
                    "Coco"
                ]
            }
        ]
    },
    {
        "category": "General Knowledge",
        "data": [
            {
                questionID: 1,
                question: "What is the capital of France?",
                correctAns: "Paris",
                options: [
                    "Rome",
                    "London",
                    "Berlin",
                    "Paris"
                ]
            },
            {
                questionID: 2,
                question: "Which planet is known as the Red Planet?",
                correctAns: "Mars",
                options: [
                    "Venus",
                    "Jupiter",
                    "Mars",
                    "Saturn"
                ]
            },
            {
                questionID: 3,
                question: "Who was the first President of the United States?",
                correctAns: "George Washington",
                options: [
                    "John Adams",
                    "Abraham Lincoln",
                    "Thomas Jefferson",
                    "George Washington"
                ]
            },
            {
                questionID: 4,
                question: "What is the largest ocean on Earth?",
                correctAns: "Pacific Ocean",
                options: [
                    "Atlantic Ocean",
                    "Arctic Ocean",
                    "Pacific Ocean",
                    "Indian Ocean"
                ]
            },
            {
                questionID: 5,
                question: "Which video game features the character Mario?",
                correctAns: "Super Mario",
                options: [
                    "Super Mario",
                    "Sonic",
                    "Zelda",
                    "Minecraft"
                ]
            },
            {
                questionID: 6,
                question: "What is the chemical symbol for water?",
                correctAns: "H2O",
                options: [
                    "NaCl",
                    "H2O",
                    "CO2",
                    "O2"
                ]
            },
            {
                questionID: 7,
                question: "Which country is known for sushi?",
                correctAns: "Japan",
                options: [
                    "China",
                    "Korea",
                    "Thailand",
                    "Japan"
                ]
            },
            {
                questionID: 8,
                question: "Who discovered gravity (legend says via an apple)?",
                correctAns: "Isaac Newton",
                options: [
                    "Albert Einstein",
                    "Nikola Tesla",
                    "Isaac Newton",
                    "Galileo"
                ]
            },
            {
                questionID: 9,
                question: "What is the largest continent?",
                correctAns: "Asia",
                options: [
                    "Asia",
                    "North America",
                    "Europe",
                    "Africa"
                ]
            },
            {
                questionID: 10,
                question: "Which game involves building with blocks and mining resources?",
                correctAns: "Minecraft",
                options: [
                    "Roblox",
                    "Fortnite",
                    "Minecraft",
                    "Terraria"
                ]
            },
            {
                questionID: 11,
                question: "What gas do humans breathe in to survive?",
                correctAns: "Oxygen",
                options: [
                    "Carbon Dioxide",
                    "Helium",
                    "Oxygen",
                    "Nitrogen"
                ]
            },
            {
                questionID: 12,
                question: "Which country is home to the pyramids of Giza?",
                correctAns: "Egypt",
                options: [
                    "India",
                    "Mexico",
                    "Peru",
                    "Egypt"
                ]
            },
            {
                questionID: 13,
                question: "What is the hardest natural substance on Earth?",
                correctAns: "Diamond",
                options: [
                    "Gold",
                    "Diamond",
                    "Quartz",
                    "Iron"
                ]
            },
            {
                questionID: 14,
                question: "Which video game franchise features 'Link' as the main character?",
                correctAns: "The Legend of Zelda",
                options: [
                    "Halo",
                    "The Legend of Zelda",
                    "Final Fantasy",
                    "Skyrim"
                ]
            },
            {
                questionID: 15,
                question: "What is the main ingredient in guacamole?",
                correctAns: "Avocado",
                options: [
                    "Pepper",
                    "Tomato",
                    "Avocado",
                    "Onion"
                ]
            },
            {
                questionID: 16,
                question: "Who painted the Mona Lisa?",
                correctAns: "Leonardo da Vinci",
                options: [
                    "Picasso",
                    "Michelangelo",
                    "Van Gogh",
                    "Leonardo da Vinci"
                ]
            },
            {
                questionID: 17,
                question: "Which country is the largest by land area?",
                correctAns: "Russia",
                options: [
                    "Russia",
                    "China",
                    "USA",
                    "Canada"
                ]
            },
            {
                questionID: 18,
                question: "What part of the plant conducts photosynthesis?",
                correctAns: "Leaves",
                options: [
                    "Leaves",
                    "Roots",
                    "Flower",
                    "Stem"
                ]
            },
            {
                questionID: 19,
                question: "Which food is traditionally associated with Italy?",
                correctAns: "Pizza",
                options: [
                    "Curry",
                    "Pizza",
                    "Sushi",
                    "Tacos"
                ]
            },
            {
                questionID: 20,
                question: "Which video game is a battle royale with building mechanics?",
                correctAns: "Fortnite",
                options: [
                    "PUBG",
                    "Call of Duty",
                    "Fortnite",
                    "Apex Legends"
                ]
            },
            {
                questionID: 21,
                question: "What is the capital of Japan?",
                correctAns: "Tokyo",
                options: [
                    "Seoul",
                    "Beijing",
                    "Tokyo",
                    "Bangkok"
                ]
            },
            {
                questionID: 22,
                question: "Who wrote the Declaration of Independence?",
                correctAns: "Thomas Jefferson",
                options: [
                    "John Adams",
                    "Benjamin Franklin",
                    "Thomas Jefferson",
                    "George Washington"
                ]
            },
            {
                questionID: 23,
                question: "What is the boiling point of water in Celsius?",
                correctAns: "100",
                options: [
                    "90",
                    "100",
                    "120",
                    "80"
                ]
            },
            {
                questionID: 24,
                question: "Which video game features a battle between Spartans and aliens?",
                correctAns: "Halo",
                options: [
                    "Destiny",
                    "Mass Effect",
                    "Halo",
                    "Warframe"
                ]
            },
            {
                questionID: 25,
                question: "Which fruit is known for keeping doctors away?",
                correctAns: "Apple",
                options: [
                    "Pear",
                    "Orange",
                    "Apple",
                    "Banana"
                ]
            },
            {
                questionID: 26,
                question: "Which country is known as the Land of the Rising Sun?",
                correctAns: "Japan",
                options: [
                    "Thailand",
                    "Japan",
                    "China",
                    "South Korea"
                ]
            },
            {
                questionID: 27,
                question: "Who developed the theory of relativity?",
                correctAns: "Albert Einstein",
                options: [
                    "Tesla",
                    "Hawking",
                    "Albert Einstein",
                    "Newton"
                ]
            },
            {
                questionID: 28,
                question: "Which ocean lies between the US and Europe?",
                correctAns: "Atlantic Ocean",
                options: [
                    "Indian Ocean",
                    "Pacific Ocean",
                    "Arctic Ocean",
                    "Atlantic Ocean"
                ]
            },
            {
                questionID: 29,
                question: "Which video game features creepers?",
                correctAns: "Minecraft",
                options: [
                    "Terraria",
                    "Roblox",
                    "Minecraft",
                    "Fortnite"
                ]
            },
            {
                questionID: 30,
                question: "What is the main ingredient in bread?",
                correctAns: "Flour",
                options: [
                    "Sugar",
                    "Corn",
                    "Rice",
                    "Flour"
                ]
            },
            {
                questionID: 31,
                question: "Which country is famous for tacos?",
                correctAns: "Mexico",
                options: [
                    "Brazil",
                    "Argentina",
                    "Mexico",
                    "Spain"
                ]
            },
            {
                questionID: 32,
                question: "What is Earth’s natural satellite?",
                correctAns: "Moon",
                options: [
                    "Mars",
                    "Venus",
                    "Sun",
                    "Moon"
                ]
            },
            {
                questionID: 33,
                question: "Who was the first man to walk on the moon?",
                correctAns: "Neil Armstrong",
                options: [
                    "Buzz Aldrin",
                    "Neil Armstrong",
                    "Yuri Gagarin",
                    "John Glenn"
                ]
            },
            {
                questionID: 34,
                question: "Which video game franchise features 'Master Chief'?",
                correctAns: "Halo",
                options: [
                    "Call of Duty",
                    "Destiny",
                    "Halo",
                    "Battlefield"
                ]
            },
            {
                questionID: 35,
                question: "Which country is known for pasta?",
                correctAns: "Italy",
                options: [
                    "Italy",
                    "Spain",
                    "Greece",
                    "France"
                ]
            },
            {
                questionID: 36,
                question: "What is the largest desert in the world?",
                correctAns: "Sahara",
                options: [
                    "Gobi",
                    "Sahara",
                    "Arabian",
                    "Kalahari"
                ]
            },
            {
                questionID: 37,
                question: "What gas do plants absorb?",
                correctAns: "Carbon Dioxide",
                options: [
                    "Oxygen",
                    "Nitrogen",
                    "Carbon Dioxide",
                    "Hydrogen"
                ]
            },
            {
                questionID: 38,
                question: "Which country hosted the 2016 Summer Olympics?",
                correctAns: "Brazil",
                options: [
                    "Russia",
                    "UK",
                    "Brazil",
                    "China"
                ]
            },
            {
                questionID: 39,
                question: "Which video game is about surviving zombies and crafting?",
                correctAns: "Minecraft",
                options: [
                    "DayZ",
                    "Minecraft",
                    "The Last of Us",
                    "Resident Evil"
                ]
            },
            {
                questionID: 40,
                question: "What is sushi traditionally wrapped in?",
                correctAns: "Seaweed",
                options: [
                    "Lettuce",
                    "Rice paper",
                    "Seaweed",
                    "Bread"
                ]
            },
            {
                questionID: 41,
                question: "What is the capital of Canada?",
                correctAns: "Ottawa",
                options: [
                    "Vancouver",
                    "Montreal",
                    "Toronto",
                    "Ottawa"
                ]
            },
            {
                questionID: 42,
                question: "Who invented the light bulb?",
                correctAns: "Thomas Edison",
                options: [
                    "Newton",
                    "Einstein",
                    "Thomas Edison",
                    "Tesla"
                ]
            },
            {
                questionID: 43,
                question: "Which country is known for the Great Wall?",
                correctAns: "China",
                options: [
                    "China",
                    "India",
                    "Japan",
                    "Mongolia"
                ]
            },
            {
                questionID: 44,
                question: "What is the largest mammal?",
                correctAns: "Blue whale",
                options: [
                    "Giraffe",
                    "Blue whale",
                    "Hippo",
                    "Elephant"
                ]
            },
            {
                questionID: 45,
                question: "Which video game features battle royale with shrinking zones?",
                correctAns: "Fortnite",
                options: [
                    "Halo",
                    "Valorant",
                    "Overwatch",
                    "Fortnite"
                ]
            },
            {
                questionID: 46,
                question: "What is the main ingredient in chocolate?",
                correctAns: "Cocoa",
                options: [
                    "Milk",
                    "Cocoa",
                    "Sugar",
                    "Vanilla"
                ]
            },
            {
                questionID: 47,
                question: "Which country is famous for croissants?",
                correctAns: "France",
                options: [
                    "Spain",
                    "France",
                    "Germany",
                    "Italy"
                ]
            },
            {
                questionID: 48,
                question: "What is the speed of light approximately (km/s)?",
                correctAns: "300000",
                options: [
                    "100000",
                    "150000",
                    "500000",
                    "300000"
                ]
            },
            {
                questionID: 49,
                question: "Which video game features building and survival in a block world?",
                correctAns: "Minecraft",
                options: [
                    "Roblox",
                    "Minecraft",
                    "Valheim",
                    "Terraria"
                ]
            },
            {
                questionID: 50,
                question: "What is the capital of Italy?",
                correctAns: "Rome",
                options: [
                    "Naples",
                    "Rome",
                    "Milan",
                    "Venice"
                ]
            }
        ]
    }
]

export default triviaData;