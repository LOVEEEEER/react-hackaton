import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAuthUserId,
    getIsLoading,
    loadUsers
} from "../../../../store/slices/auth";
import {
    getDevelopersLoading,
    loadDevelopers
} from "../../../../store/slices/developers";
import { loadFavourites } from "../../../../store/slices/favourites";
import {
    getQualitiesLoading,
    loadQualities
} from "../../../../store/slices/qualities";

const AppLoader = ({ children }) => {
    const userId = useSelector(getAuthUserId());
    const dispatch = useDispatch();
    const usersLoading = useSelector(getIsLoading());
    const qualitiesLoading = useSelector(getQualitiesLoading());
    const developersLoading = useSelector(getDevelopersLoading());
    useEffect(() => {
        if (userId) {
            dispatch(loadFavourites(userId));
        }
    }, [userId]);
    useEffect(() => {
        dispatch(loadDevelopers());
        dispatch(loadQualities());
        dispatch(loadUsers());
    }, []);

    if (!usersLoading && !qualitiesLoading && !developersLoading) {
        return children;
    }
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default AppLoader;
