-- Active: 1677044886174@@127.0.0.1@5432@ebook@public

CREATE Table author(
    id_auth serial PRIMARY KEY,
    name varchar(150) not null,
    profile_pic VARCHAR not null DEFAULT 'assets/authors/default.png'
);

CREATE Table books(
    id SERIAL primary key,
    title VARCHAR not null,
    description TEXT,
    type VARCHAR(50) NOT NULL DEFAULT 'unknown',
    release_date date,
    cover VARCHAR not null DEFAULT 'assets/books/default.png',
    id_auth INT ,
    constraint fk_author FOREIGN key(id_auth) REFERENCES author(id_auth)
);

INSERT INTO author (id_auth, name) VALUES
(1, 'Jane Austen'),
(2, 'Charles Dickens'),
(3, 'Leo Tolstoy'),
(4, 'Fyodor Dostoevsky'),
(5, 'Ernest Hemingway'),
(6, 'Gabriel Garcia Marquez'),
(7, 'J.K. Rowling'),
(8, 'Stephen King'),
(9, 'Agatha Christie'),
(10, 'Arthur Conan Doyle');

INSERT INTO books (id, title, description, release_date, id_auth, cover) VALUES
(1, 'Pride and Prejudice', 'A classic novel about the complexities of 19th-century English society.', '1813-01-28', 1, 'res/bookCovers/pride_and_prejudice.png'),
(2, 'Sense and Sensibility', 'The story of two sisters and their experiences of love and heartbreak.', '1811-10-30', 1, 'res/bookCovers/sense_and_sensibility.png'),
(3, 'Emma', 'The tale of a young woman who fancies herself a matchmaker.', '1815-12-23', 1, 'res/bookCovers/emma.png'),
(4, 'David Copperfield', 'An autobiographical novel about a young man''s life.', '1850-05-01', 2, 'res/bookCovers/david_copperfield.png'),
(5, 'Oliver Twist', 'The story of a young orphan who falls in with a group of criminals.', '1838-02-01', 2, 'res/bookCovers/olivier_twist.png'),
(6, 'War and Peace', 'A historical novel about the French invasion of Russia.', '1869-01-01', 3, 'res/bookCovers/war_and_peace.png'),
(7, 'Anna Karenina', 'The story of a woman who has an affair and the consequences that follow.', '1877-01-01', 3, 'res/bookCovers/anna_karenina.png'),
(8, 'Crime and Punishment', 'A psychological novel about a man who commits a murder and his subsequent guilt.', '1866-01-01', 4, 'res/bookCovers/crime_and_punishment.png'),
(9, 'The Brothers Karamazov', 'The story of three brothers and their relationship with their father.', '1880-01-01', 4, 'res/bookCovers/the_brothers_karamazov.png'),
(10, 'The Old Man and the Sea', 'The tale of an aging fisherman and his struggle to catch a giant marlin.', '1952-09-01', 5, 'res/bookCovers/the_old_man_and_the_sea.png'),
(11, 'One Hundred Years of Solitude', 'A magical realist novel that follows the Buendía family over several generations.', '1967-05-30', 6, 'res/bookCovers/one_hundred_years_of_solitude.png'),
(12, 'Love in the Time of Cholera', 'The story of a man who waits over 50 years to be with the woman he loves.', '1985-01-01', 6, 'res/bookCovers/love_in_the_time_of_cholera.png'),
(13, 'Harry Potter and the Philosopher''s Stone', 'The first book in the Harry Potter series.', '1997-06-26', 7, 'res/bookCovers/harry_potter_and_the_philosophers_stone.png'),
(14, 'Harry Potter and the Chamber of Secrets', 'The second book in the Harry Potter series.', '1998-07-02', 7, 'res/bookCovers/harry_potter_and_the_chamber_of_secrets.png'),
(15, 'The Shining', 'A horror novel about a family trapped in a haunted hotel.', '1977-01-28', 8, 'res/bookCovers/the_shining.png'),
(16, 'Carrie', 'The story of a high school girl who discovers she has telekinetic powers.', '1974-04-05', 8, 'res/bookCovers/carrie.png'),
(17, 'Murder on the Orient Express', 'A classic mystery novel featuring detective Hercule Poirot.', '1934-01-01', 9, 'res/bookCovers/murder_on_the_orient_express.png'),
(18, 'And Then There Were None', 'A mystery novel about a group of people who are invited to an island and are killed off one by one.', '1939-11-06', 9, 'res/bookCovers/and_then_there_were_none.png'),
(19, 'A Study in Scarlet', 'The first novel featuring detective Sherlock Holmes.', '1887-10-14', 10, 'res/bookCovers/a_study_in_scarlet.png'),
(20, 'The Hound of the Baskervilles', 'A mystery novel featuring Sherlock Holmes and his assistant Dr. Watson.', '1902-04-25', 10, 'res/bookCovers/the_hound_of_the_baskervilles.png');


UPDATE books SET type = 'Romance' WHERE id_auth = 1;
UPDATE books SET type = 'Classic' WHERE id_auth IN (2, 3, 4);
UPDATE books SET type = 'Fiction' WHERE id_auth = 5;
UPDATE books SET type = 'Magical Realism' WHERE id_auth = 6;
UPDATE books SET type = 'Fantasy' WHERE id_auth = 7;
UPDATE books SET type = 'Horror' WHERE id_auth = 8;
UPDATE books SET type = 'Mystery' WHERE id_auth IN (9, 10);
