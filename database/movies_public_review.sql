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