import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Divider, Header, Breadcrumb, Table, Label, Icon } from 'semantic-ui-react';
import { getIssue, clearState } from '../actions/IssueAction';

class IssueDetail extends React.Component {

    state = {
        summary : '',
        description : '',
        status: null,
        priority: null,
        labels: [],
        type: null,
        assignee: null,
        created: null,
        updated: null,
        dueDate: null
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getIssue(0, params.issueId);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.issue){
            this.setState({
                summary: nextProps.issue.summary,
                description: nextProps.issue.description,
                created: nextProps.issue.createdDate,
                updated: nextProps.issue.modifiedDate,
                dueDate: nextProps.issue.dueDate,
            });
            if(nextProps.issue.type){
                this.setState({
                    type: nextProps.issue.type.name
                });
            }
            if(nextProps.issue.priority){
                this.setState({
                    priority: nextProps.issue.priority.name
                });
            }
            if(nextProps.issue.status){
                this.setState({
                    status: nextProps.issue.status.name
                });
            }
            if(nextProps.issue.labels){
                this.setState({
                    labels: nextProps.issue.labels
                });
            }
            if(nextProps.issue.assignee){
                this.setState({
                    assignee: nextProps.issue.assignee.firstName
                });
            }
        }
    }

    issueBreadcrumb () {
        return (
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Project</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>{this.state.summary}</Breadcrumb.Section>
        </Breadcrumb>
      );
    }

    issueLabels () {

        if(this.state.labels.length == 0){
            return 'None';
        }

        return this.state.labels.map(label => {
            return (
                <Label key={label.id} image>
                    {label.name}
                    <Icon name='delete' />
                </Label>
            );
        });
    }

    issueDetails () {
        return (
            <Table definition>
                <Table.Body>
                <Table.Row>
                    <Table.Cell width={2}>Type</Table.Cell>
                    <Table.Cell>{this.state.type}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Priority</Table.Cell>
                    <Table.Cell>{this.state.priority}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Labels</Table.Cell>
                    <Table.Cell>{this.issueLabels()}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Status</Table.Cell>
                    <Table.Cell>{this.state.status}</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        );
    }

    issuePeople () {
        return (
            <Table definition>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={2}>Assignee</Table.Cell>
                        <Table.Cell>
                            <Label as='a' image>
                                <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                {this.state.assignee}
                                <Icon name='delete' />
                            </Label>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

    issueDates () {
        return (
            <Table definition>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={2}>Created</Table.Cell>
                        <Table.Cell>{this.state.created}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Updated</Table.Cell>
                        <Table.Cell>{this.state.updated}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>DueDate</Table.Cell>
                        <Table.Cell>{this.state.dueDate}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
      

    render () {
        return (
            <Container>
                {this.issueBreadcrumb()}
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Divider horizontal>
                                <Header as='h4'>
                                    Details
                                </Header>
                            </Divider>
                            {this.issueDetails()}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Divider horizontal>
                                <Header as='h4'>
                                    People
                                </Header>
                            </Divider>
                            {this.issuePeople()}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Divider horizontal>
                                <Header as='h4'>
                                    Description
                                </Header>
                            </Divider>
                            {this.state.description}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Divider horizontal>
                                <Header as='h4'>
                                    Dates
                                </Header>
                            </Divider>
                            {this.issueDates()}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Divider horizontal>
                                <Header as='h4'>
                                    Comments
                                </Header>
                            </Divider>

                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container>
        );
    }

}

const mapStateToProps = state => {
    return {
        issue: state.issue.issue
    };
  };
  
  const actions = {
    getIssue, 
    clearState
  };

export default connect(mapStateToProps,actions)(IssueDetail);
