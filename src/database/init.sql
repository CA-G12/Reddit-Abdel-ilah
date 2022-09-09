begin;

drop table if exists posts,users cascade;

create table users(
    id serial primary key,
    username varchar(100) not null UNIQUE,
    email varchar(100) not null UNIQUE,
    password varchar(100) not null,
    images varchar(100)
);

create table posts(
    id serial primary key,
    content text not null,
    imag TEXT,
    user_id int not null,
    foreign key (user_id) references users(id)
);

insert into
    users(username, email, password, images)
values
    (
        'abde',
        'abde@gmail.com',
        'abde123456',
        'hi Image'
    );
insert into
    posts(content, imag, user_id)
values
    ('hi abde', 'imgUrl', 1),
    ('hi ahmed', 'imgurl', 1);

commit;