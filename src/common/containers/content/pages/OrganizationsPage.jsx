/**
 * Organizations page
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

// Libraries
import { connect } from 'react-redux';
// Self defined
import OrganizationsPage from '../../../components/content/pages/OrganizationsPage';

const mapStateToProps = (state) => {
    const { basePath } = state;

    return {
        basePath
    };
};

export default connect(mapStateToProps)(OrganizationsPage);
