package com.tanrilla.lizard.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
public class Issue {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String summary;
	private String description;
	@ManyToOne
	@JoinColumn(name = "projectId")
	private Project project;
	private Date dueDate;
	private Date createdDate;
	private Date modifiedDate;
	@ManyToOne
	@JoinColumn(name = "priorityId")
	private Priority priority;
	@ManyToOne
	@JoinColumn(name = "statusId")
	private Status status;
	@ManyToOne
	@JoinColumn(name = "typeId")
	private Type type;
	@ManyToOne
	@JoinColumn(name = "assigneeId")
	private User assignee;
	@ManyToMany
	@JoinTable(
			name = "issueLabel",
			joinColumns = @JoinColumn(name = "issueId"),
			inverseJoinColumns = @JoinColumn(name = "labelId"))
	private Set<Label> labels;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public User getAssignee() {
		return assignee;
	}

	public void setAssignee(User assignee) {
		this.assignee = assignee;
	}

	public Set<Label> getLabels() {
		return labels;
	}

	public void setLabels(Set<Label> labels) {
		this.labels = labels;
	}
}