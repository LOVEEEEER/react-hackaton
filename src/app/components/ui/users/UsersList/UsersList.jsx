import React from "react";
import styles from "./styles/users-list.module.scss";
import { useSelector } from "react-redux";
import { getUsersList } from "../../../../store/slices/users";
import UserCard from "../UserCard";

const UsersList = () => {
    const users = useSelector(getUsersList());
    if (users) {
        return (
            <ul className={styles.main__list}>
                {users.map((user) => (
                    <li key={user.id} className={styles.main__item}>
                        <UserCard {...user} />
                    </li>
                ))}
            </ul>
        );
    }
};

export default UsersList;
