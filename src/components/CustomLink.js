import {Route, Link as ReactRouterLink} from 'react-router-dom';
import {createPath} from 'history';

/**
 * Code courtesy of user trixn on StackOverflow
 * source: https://stackoverflow.com/questions/51578815/how-to-prevent-history-push-if-location-didnt-change-in-react-router4
 * 
 * Custom <Link> component that uses underlying React link and route code to check
 * if the current location matches destination (link) location and if so makes a
 * replace call instead of a push call to the history stack. Avoids cluttering
 * history stack with multiple instances of the same location.
 * 
 * Currently this functionality does not exist in a trivial fashion in the React
 * code as the developers are working on overhauling how React interacts with the
 * history API.
 * 
 * @date March 3, 2021
 */

const CustomLink = ({to, replace, ...props}) => (
    <Route path={typeof to === 'string' ? to : createPath(to)} exact>
        {({match}) => (
            <ReactRouterLink {...props} to={to} replace={replace || !!match} />
        )}
    </Route>
);

CustomLink.propTypes = ReactRouterLink.propTypes;
CustomLink.defaultProps = ReactRouterLink.defaultProps;

export default CustomLink;
