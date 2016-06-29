/**
 * Individual project page
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

/* global window, $ */

// Libraries
import browserHistory from 'react-router/lib/browserHistory';
import Button from'react-bootstrap/lib/Button';
import React from 'react/lib/React';
// Self defined
import CollaboratorsCommitsBarChart from '../widgets/charts/CollaboratorsCommitsBarChart';
import ProjectAuthorizationWidget from '../widgets/authorization_widget/ProjectAuthorizationWidget';
import ProjectCollaboratorTable from '../widgets/data_tables/ProjectCollaboratorTable';

export default class ProjectPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshTable: false
        };
        // Event Handlers
        this.goToEditor = this.goToEditor.bind(this);
        this.refreshTable = this.refreshTable.bind(this);
    }

    goToEditor() {
        let encode = `${this.props.params.ownerId}+${this.props.params.projectName}`;
        browserHistory.push('/?project=' + window.encodeURIComponent(encode));
        window.location.reload();
    }

    refreshTable() {
        this.setState({
            refreshTable: !this.state.refreshTable
        });
    }

    render() {

        return (

            <section className="content">
                <div className="box box-primary">
                    <div className="row">
                        <h2 className="col-md-10" style={{paddingLeft: "30px", paddingTop: "14px"}}>
                            <i className="fa fa-cube"/>{` ${this.props.params.ownerId} / ${this.props.params.projectName}`}
                        </h2>
                        <div className="col-md-2" style={{paddingRight: "30px", paddingTop: "14px"}}>
                            <Button bsStyle="info" style={{float: "right"}}
                                    onClick={this.goToEditor}>
                                Open in editor
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-6">

                        <ProjectCollaboratorTable ownerId={this.props.params.ownerId}
                                                  projectName={this.props.params.projectName}
                                                  refreshTable={this.state.refreshTable}
                                                  restClient={this.props.restClient}/>

                    </div>

                    <div className="col-md-6">

                        <ProjectAuthorizationWidget ownerId={this.props.params.ownerId}
                                                    projectName={this.props.params.projectName}
                                                    refreshTable={this.refreshTable}
                                                    restClient={this.props.restClient}/>

                        <div className="row">
                            <CollaboratorsCommitsBarChart height={$(window).height() / 1.8}
                                                          options={{}}
                                                          ownerId={this.props.params.ownerId}
                                                          projectName={this.props.params.projectName}
                                                          restClient={this.props.restClient}
                                                          title="Commits By Collaborator"
                                                          width={$(window).width() / 2.36}/>
                        </div>

                    </div>
                </div>

            </section>
        );
    }

}
