DO language plpgsql $$
BEGIN

        DROP TABLE QUESTIONS CASCADE;
        DROP TABLE ANSWERS CASCADE;
        DROP TABLE USER_TO_QUESTION CASCADE;
        DROP TABLE QUESTIONS_TO_ANSWERS CASCADE;

        DROP SEQUENCE USER_TO_QUEST_SEQ;
        DROP SEQUENCE QUEST_TO_ANSWER_SEQ;

        CREATE SEQUENCE IF NOT EXISTS USER_TO_QUEST_SEQ START 1000 INCREMENT 1 NO MAXVALUE;
        CREATE SEQUENCE IF NOT EXISTS QUEST_TO_ANSWER_SEQ START 1000 INCREMENT 1 NO MAXVALUE;

        CREATE TABLE IF NOT EXISTS QUESTIONS
        (
            QUEST_ID    UUID      PRIMARY KEY   UNIQUE      NOT NULL
          , QUESTION    VARCHAR                             NOT NULL
          , ENTITY      VARCHAR                             NOT NULL
          , RANKING     INT       DEFAULT 1                 NOT NULL
          , CREATED_ON  timestamp default current_timestamp NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ANSWERS
        (
            ANSWER_ID   UUID      PRIMARY KEY  UNIQUE       NOT NULL
          , ANSWER      VARCHAR                             NOT NULL
          , RANKING     INT       DEFAULT 1                 NOT NULL
          , CREATED_ON  timestamp default current_timestamp NOT NULL
        );

        CREATE TABLE IF NOT EXISTS USER_TO_QUESTION
        (
            ID          SERIAL      PRIMARY KEY       UNIQUE          NOT NULL
          , QUEST_ID    UUID        REFERENCES QUESTIONS (QUEST_ID)   NOT NULL
          , USER_ID     VARCHAR                                       NOT NULL
          , CREATED_ON  timestamp default current_timestamp           NOT NULL
        );

        CREATE TABLE IF NOT EXISTS QUESTIONS_TO_ANSWERS
        (
            ID          SERIAL      PRIMARY KEY       UNIQUE          NOT NULL
          , QUEST_ID    UUID        REFERENCES QUESTIONS (QUEST_ID)   NOT NULL
          , ANSWER_ID   UUID        REFERENCES ANSWERS (ANSWER_ID)    NOT NULL
          , CREATED_ON  timestamp default current_timestamp           NOT NULL
        );


        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b0', 'What is postgresql?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b0', 'Andrew Gremlich');

        INSERT INTO ANSWERS (ANSWER_ID, ANSWER)
        VALUES ('002cf357-245f-4122-a9e8-29362b1fb9b0', 'Postgresql is an open source relational database system.');

        INSERT INTO QUESTIONS_TO_ANSWERS (QUEST_ID, ANSWER_ID)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b0', '002cf357-245f-4122-a9e8-29362b1fb9b0');




        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b1', 'What is rust?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b1', 'Andrew Gremlich');

        INSERT INTO ANSWERS (ANSWER_ID, ANSWER)
        VALUES ('002cf357-245f-4122-a9e8-29362b1fb9b1', 'Rust is an open source systems programming language.');

        INSERT INTO QUESTIONS_TO_ANSWERS (QUEST_ID, ANSWER_ID)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b1', '002cf357-245f-4122-a9e8-29362b1fb9b1');



        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b2', 'What is C++?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b2', 'Andrew Gremlich');



        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b3', 'Could you explain the asynchronous event loop nature of java script?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b3', 'Andrew Gremlich');




        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b4', 'How do I convert a cron schedule to an autosys schedule?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b4', 'Andrew Gremlich');



        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b5', 'How do I paginate postgres query results?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b5', 'Andrew Gremlich');



        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b6', 'What are the best practices for programming in Java Springboot?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b6', 'Andrew Gremlich');



        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b7', 'How do I join two tables in postgres?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b7', 'Andrew Gremlich');

        INSERT INTO ANSWERS (ANSWER_ID, ANSWER)
        VALUES ('002cf357-245f-4122-a9e8-29362b1fb9b7', 'SELECT a.*, b.*
                                                         FROM table1 a
                                                         JOIN table2 b');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b7', '002cf357-245f-4122-a9e8-29362b1fb9b7');



        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b8', 'What is the difference between an INNER, LEFT, and OUTER JOIN?', 'programming');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b8', 'Andrew Gremlich');




        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9b9', 'How do I reset my password for my d<GMID> account?', 'Help Desk');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9b9', 'Andrew Gremlich');




        INSERT INTO QUESTIONS (QUEST_ID, QUESTION, ENTITY)
        VALUES ('502cf357-245f-4122-a9e8-29362b1fb9a0', 'Where is the total rewards page?', 'HR');

        INSERT INTO USER_TO_QUESTION (QUEST_ID, USER_ID)
        VALUES('502cf357-245f-4122-a9e8-29362b1fb9a0', 'Andrew Gremlich');


END
$$;
