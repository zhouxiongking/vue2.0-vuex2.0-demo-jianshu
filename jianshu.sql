create table users
(
   id                   int          auto_increment    not null primary key,
   email                varchar(50)                    not null,
   nickname             varchar(15)                    not null,
   telephone            varchar(11)                    null,
   password             varchar(20)                    not null,
   attention_count      int          default 0         null,
   enjoy_count          int          default 0         null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table article
(
  id                   int          auto_increment    not null primary key,
  type                 varchar(10)                    null,
  topic                varchar(10)                    null,
  user_id              int                            not null,
  title                varchar(30)                    not null,
  content              longtext                       not null,
  read_count           int          default 0         null,
  comment_count        int          default 0         null,
  like_count           int          default 0         null,
  reward_count         int          default 0         null,
  publish_time         varchar(20)                    null,
  picture_url          varchar(100)                   null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
