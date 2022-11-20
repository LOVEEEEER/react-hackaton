import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, loadUsers } from "../../../../store/slices/auth";
import {
    getQualitiesLoading,
    loadQualities
} from "../../../../store/slices/qualities";
import {
    getDevelopersLoading,
    loadDevelopers
} from "../../../../store/slices/developers";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const usersLoading = useSelector(getIsLoading());
    const qualitiesLoading = useSelector(getQualitiesLoading());
    const developersLoading = useSelector(getDevelopersLoading());

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
