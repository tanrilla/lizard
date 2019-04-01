import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Breadcrumb, Table, Label, Icon, Button, Comment, Dropdown } from 'semantic-ui-react';
import { EditorState, convertFromRaw } from "draft-js";
import Editor from 'draft-js-plugins-editor';

import { getIssue, clearState, saveIssueComment, getIssueComments, updateIssueFields } from '../actions/IssueAction';
import { getUsers, getStatusList } from '../actions/CommonAction';
import CustomTextEditor from './IssueComment';

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
        dueDate: null,
        showComment: false,
        showStatus: false,
        showAssignee: false,
        comment: null,
        issueId: null,
        statusOptions: [],
        assigneeOptions: [],
        statusId: null,
        assigneeId: null,
    };
 
    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({issueId: params.issueId});
        this.props.getIssue(0, params.issueId);
        this.props.getIssueComments(params.issueId);
        this.props.getUsers();
        this.props.getStatusList();
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.statusList){
            let statusListTmp = [];
            nextProps.statusList.forEach((st, i) => {
                statusListTmp.push({
                    key: i,
                    text: st.name,
                    value: st.id
                });
            });
            this.setState({statusOptions: statusListTmp});
        }

        if(nextProps.userList){
            let userListTmp = [];
            nextProps.userList.forEach((u, i) => {
                userListTmp.push({
                    key: i,
                    text: u.firstName,
                    value: u.id
                });
            });
            this.setState({assigneeOptions: userListTmp});
        }

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
                    status: nextProps.issue.status.name,
                    statusId: nextProps.issue.status.id
                });
            }
            if(nextProps.issue.labels){
                this.setState({
                    labels: nextProps.issue.labels
                });
            }
            if(nextProps.issue.assignee){
                this.setState({
                    assignee: nextProps.issue.assignee.firstName,
                    assigneeId: nextProps.issue.assignee.id
                });
            }
        }
    }

/** Actions */
    showCommentEditor () {
        this.setState({showComment : true});
    }

    addComment () {
        var comment = {
            description: this.state.comment,
            issueId: this.state.issueId,
            createdBy: 1
        };
        this.props.saveIssueComment(comment, this.state.issueId);
        this.setState({showComment : false});
    }

    cancelComment () {
        this.setState({showComment : false});
    }

    editStatus () {
        this.setState({showStatus : true});
    }

    saveStatus () {
        this.props.updateIssueFields(this.state.issueId,{
            status:{
                id: this.state.statusId
            }
        });
        this.setState({showStatus : false});
    }

    editAssignee () {
        this.setState({showAssignee : true});
    }

    saveAssignee () {
        this.props.updateIssueFields(this.state.issueId,{
            assignee:{
                id: this.state.assigneeId
            }
        });
        this.setState({showAssignee : false});
    }

    getComment = (comment) => {
        this.setState({comment});
    }

    onChangeStates = (event, data) => {
        this.setState({statusId: data.value});
    }

    onChangeAssignee = (event, data) => {
        this.setState({assigneeId: data.value});
    }
    
/** /Actions */


    issueBreadcrumb () {
        return (
        <p>
            <Breadcrumb>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Project</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>{this.state.summary}</Breadcrumb.Section>
            </Breadcrumb>
        </p>
      );
    }

    issueComments () {
        return (
        <Comment.Group>
            {
                this.props.comments.map(comment => {
                    const contentState = convertFromRaw(JSON.parse(comment.description));
                    const editorState = EditorState.createWithContent(contentState);
                    return (
                        <Comment>
                            <Comment.Avatar src='http://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' />
                            <Comment.Content>
                                <Comment.Author as='a'>Ricardo Figueroa</Comment.Author>
                                <Comment.Metadata>
                                    <div>Today at 5:42PM</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <Editor editorState={editorState} readOnly={true} />
                                </Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    );
                })
            }
        </Comment.Group>
        );

    }

    issueLabels () {

        if(!Array.isArray(this.state.labels) || this.state.labels.length === 0){
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
                    <Table.Cell>
                        {
                            this.state.showStatus ?
                                <Dropdown 
                                        options={this.state.statusOptions} 
                                        value={this.state.statusId} 
                                        onChange={this.onChangeStates}
                                        selection 
                                        search 
                                        onBlur={event => this.saveStatus()}/>
                            :
                                <Label as='a' onClick={event => this.editStatus()} basic>
                                    {this.state.status}
                                </Label>
                        }
                    </Table.Cell>
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

                            {
                                this.state.showAssignee ?
                                    <Dropdown 
                                            options={this.state.assigneeOptions} 
                                            value={this.state.assigneeId}
                                            onChange={this.onChangeAssignee}
                                            search 
                                            selection 
                                            onBlur={event => this.saveAssignee()}/>
                                :
                                    <Label as='a' onClick={event => this.editAssignee()} image>
                                        <img src='http://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' alt=""/>
                                        {this.state.assignee}
                                    </Label>
                            }
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
                            <Header as='h3' dividing>
                                Details
                            </Header>
                            {this.issueDetails()}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h3' dividing>
                                People
                            </Header>
                            {this.issuePeople()}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Header as='h3' dividing>
                                Description
                            </Header>
                            {this.state.description}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h3' dividing>
                                Dates
                            </Header>
                            {this.issueDates()}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Header as='h3' dividing>
                                Comments
                            </Header>
                            {this.issueComments()}
                            {
                                this.state.showComment === true ?
                                    <div>
                                        <p><CustomTextEditor getComment={this.getComment}/></p>
                                        <p>
                                            <Button color='blue' size='small' onClick={event => this.addComment()}>Add</Button> 
                                            <Button size='small' onClick={event => this.cancelComment()}>Cancel</Button> 
                                        </p>
                                    </div>
                                    : 
                                    <Button size='small' onClick={event => this.showCommentEditor()}>
                                        <Icon name="comment outline"/>Comment
                                    </Button>
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }

}

const mapStateToProps = state => {
    return {
        issue: state.issue.issue,
        comments: state.issue.comments,
        statusList: state.status.statusList,
        userList: state.user.users
    };
  };
  
  const actions = {
    getIssue, 
    clearState,
    saveIssueComment,
    getIssueComments,
    getUsers,
    getStatusList,
    updateIssueFields
  };

export default connect(mapStateToProps,actions)(IssueDetail);
