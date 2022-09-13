
create table "user"
(
    id          serial
        constraint "PK_cace4a159ff9f2512dd42373760"
            primary key,
    "firstName" varchar                                   not null,
    email       varchar                                   not null,
    password    varchar                                   not null,
    role        varchar default 'user'::character varying not null,
    "lastName"  varchar                                   not null
);

alter table "user"
    owner to postgres;

INSERT INTO public."user" (id, "firstName", email, password, role, "lastName") VALUES (2, 'Tomás', 'tomas@gmail.com', '$2b$10$wfg1M9l2Bf95Np5NcS.WMO05au8f10mv8DEbIqL3alDNMrn3FpmBm', 'admin', 'Guzmán');
INSERT INTO public."user" (id, "firstName", email, password, role, "lastName") VALUES (3, 'Mario', 'mario@gmail.com', '$2b$10$WYBkqOfsvkk4G7W8jB1LXeozD9nZcm2oVkNfQZD296kh91QNESwkG', 'user', 'Avena');
INSERT INTO public."user" (id, "firstName", email, password, role, "lastName") VALUES (4, 'John', 'john@gmail.com', '$2b$10$pJIVSAB0dgazAUOvHgDrHukhaPGRcVlrg4HmmsfAnOXuicokUz1bu', 'user', 'Doe');
INSERT INTO public."user" (id, "firstName", email, password, role, "lastName") VALUES (5, 'Jimmy', 'mcgill@gmail.com', '$2b$10$Q3SNhUjy0qmpMClCefb08.Zogqcw1nl2KSD/9MZH3fp1YIuXRrYgS', 'user', 'McGill');
INSERT INTO public."user" (id, "firstName", email, password, role, "lastName") VALUES (6, 'Kim', 'wexler@gmail.com', '$2b$10$s6X/lN26lAMDal8vY6WaMe2UXf7tm1dmzG1xg1Spercn7WYGpXk2q', 'user', 'Wexler');

create table movie
(
    id                serial
        constraint "PK_cb3bb4d61cf764dc035cbedd422"
            primary key,
    description       text,
    title             varchar           not null
        constraint "UQ_a81090ad0ceb645f30f9399c347"
            unique,
    "releaseDate"     timestamp         not null,
    "posterImage"     varchar,
    genre             varchar           not null,
    "backgroundImage" varchar,
    "titleImage"      varchar,
    duration          integer default 0 not null
);

alter table movie
    owner to postgres;

INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (38, 'Gustave H, a concierge, is wrongly framed for murder at the Grand Budapest Hotel. In the process of proving his innocence, he befriends a lobby boy.', 'The Grand Budapest Hotel', '2014-06-03 00:00:00.000000', 'https://i.etsystatic.com/11286558/r/il/554b47/1774726986/il_fullxfull.1774726986_or58.jpg', 'Comedy', 'https://images2.alphacoders.com/760/thumb-1920-760735.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/The_Grand_Budapest_Hotel_movie_logo.png', 100);
INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (37, 'Riggan Thomson, a fading cinema star, plans to resurrect his career with a passionate Broadway production. However, during rehearsals, his co-star is injured forcing him to hire a new actor.', 'Birdman or (The Unexpected Virtue of Ignorance)', '2014-10-14 00:00:00.000000', 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/06/IMG_8193-689x1024.jpeg', 'Drama', 'https://images.alphacoders.com/608/608356.jpg', 'https://images.fanart.tv/fanart/birdman-54f5d057da8e3.png', 120);
INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (39, 'Con artists Irving and Sydney are forced to work for Richie, an FBI agent, who offers them amnesty. However, they are used for a sting operation that leads to the conviction of prominent people.', 'American Hustle', '2014-01-24 00:00:00.000000', 'https://m.media-amazon.com/images/I/91rUj8yMeIL._AC_SY679_.jpg', 'Crime', 'https://wallpaperaccess.com/full/8149318.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/American_Hustle_Logo.png/800px-American_Hustle_Logo.png', 138);
INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (40, 'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.', 'Shutter Island', '2010-02-26 00:00:00.000000', 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 'Thriller', 'https://wallpaperaccess.com/full/2058367.jpg', 'https://image.tmdb.org/t/p/w500/39iF0VC0mtMCPNBzYJPkErkabvk.png', 138);
INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (41, 'Patrick Bateman, a wealthy investment banker, hides his psychopathic ego from his friends. Later, his illogical fantasies escalate and he submits to an uncontrollable bloodlust.', 'American Psycho', '2000-10-11 00:00:00.000000', 'https://image.posterlounge.com/images/big/1875969.jpg', 'Thriller', 'https://images4.alphacoders.com/520/thumb-1920-52094.jpg', 'https://images.fanart.tv/fanart/american-psycho-519646b2d860d.png', 102);
INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (11, 'Andrew enrols in a music conservatory to become a drummer. But he is mentored by Terence Fletcher, whose unconventional training methods push him beyond the boundaries of reason and sensibility.', 'Whiplash', '2014-01-01 00:00:00.000000', 'https://m.media-amazon.com/images/I/71YxutwE3yL._AC_SY741_.jpg', 'Action', 'https://wallpaperaccess.com/full/2191678.jpg', 'https://coldfeet-space.nyc3.cdn.digitaloceanspaces.com/wsb/2020/07/Whiplash-logo.png', 107);
INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (20, 'Paul, the head guard of a prison, meets an inmate, John, an African American who is accused of murdering two girls. His life changes drastically when he discovers that John has a special gift.', 'The Green Mile', '2000-03-15 00:00:00.000000', 'https://m.media-amazon.com/images/I/51mvJdnlXrL._AC_.jpg', 'Action', 'https://images5.alphacoders.com/404/thumb-1920-404194.jpg', 'https://picfiles.alphacoders.com/634/63449.png', 189);
INSERT INTO public.movie (id, description, title, "releaseDate", "posterImage", genre, "backgroundImage", "titleImage", duration) VALUES (74, 'Sam, a 12-year-old orphan, falls in love with Suzy and the two run away to a secluded cove on an island, prompting the entire town to begin a search.', 'Moonlight Kingdom', '2021-01-25 00:00:00.000000', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a1b0d048246361.58927876d9fc0.jpg', 'Comedy', 'https://images4.alphacoders.com/635/thumb-1920-635820.jpg', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b20b8721755273.56306f9b2daf3.png', 94);

create table review
(
    id          serial
        constraint "PK_2e4299a343a81574217255c00ca"
            primary key,
    description varchar not null,
    rating      varchar not null,
    "userId"    integer
        constraint "FK_1337f93918c70837d3cea105d39"
            references "user",
    "movieId"   integer
        constraint "FK_4ccf71f9d14aa1a059877b06343"
            references movie
);

alter table review
    owner to postgres;

INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (4, 'Excelent movie and nice acting', 2, 11, 5);
INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (5, 'Incredible drama movie', 2, 20, 5);
INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (7, 'Powerful movie that finishes somewhat abruptly', 3, 11, 4);
INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (8, 'Exquisite movie with amazing soundtrack and color palette', 2, 74, 4);
INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (9, 'Soundtrack is amazing. Great acting', 3, 74, 4);
INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (6, 'I love The Grand Budapest Hotel so much. Anderson''s signature color palette is like the least interesting part of this movie. It''s a stand-out film due to it''s flawless technical presentation of the most convoluted plot I''ve ever seen fit into an hour and a half of screen time. There are 3 levels of frame stories and about 15 important characters, but the storytelling is so well organized, even my ADHD brain could follow it.', 2, 38, 4);
INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (10, 'definitely an interesting, unique, and flat out weird movie. i enjoyed the message it portrayed at the end, it was sweet. i love how the movie was just about set in one scene but i absolutely could not stand the constant drumming. i feel like it ruined the movie for me. overall not bad-but probably wouldn’t watch it again.', 4, 37, 3);
INSERT INTO public.review (id, description, "userId", "movieId", rating) VALUES (11, 'Winner of 4 Academy Awards, including Best Picture, Birdman or (The Unexpected Virtue of Ignorance) is Alejandro G. Iñárritu’s first foray into the comedy genre and is by far his most daring film in his career. The film focues on a washed-up actor Riggan Thompson trying  to make a comeback in a Broadway play, but he runs into several issues along the way, such as buttheading with his fellow actor and his struggles with guilt.', 2, 37, 5);