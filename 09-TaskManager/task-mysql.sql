drop table if exists task;

create table task (
	id int auto_increment primary key,
	task varchar(50) not null unique,
	start_date datetime not null,
	end_date datetime not null,
	priority int not null,
	finished boolean not null,
	parent_id int,
	FOREIGN KEY (parent_id)
		REFERENCES task(id)
		ON DELETE CASCADE  /* Child will be removed from table if parent will be removed */
) ENGINE=INNODB;

