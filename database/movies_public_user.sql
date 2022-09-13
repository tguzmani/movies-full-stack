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