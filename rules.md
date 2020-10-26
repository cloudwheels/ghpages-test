View <a href="https://github.com/cloudwheels/ghpages-test/commits/gh-pages/rules.md" target="_blank">RULES HISTORY</a>

# 1 Overview
This document defines the rules for the Dash Incubator bounty fund.  Later these rules will be implemented as code in the Incubator app itself (which will ultimately be implemented as a Dash Dapp).
## 1.1 Links
Website: https://dashinc.app
Trello Board: https://trello.com/b/D5wypdJ0/project-board
Awarded Claims: https://docs.google.com/spreadsheets/d/1mhXlo4ylqWLLSYN4MGiLWlp7Gq3jrsDt0kB701dwMNU/edit?usp=sharing
Discussion: https://discord.gg/mU79ZWx
Funds: https://chainz.cryptoid.info/dash/address.dws?XbFb9b1qaoLykngDbUwBVBFwSHuwQRhSqc.htm
Dash proposals:
Phase 1: https://www.dashcentral.org/p/dash-platform-incubator
Phase 2: https://www.dashcentral.org/p/dash-platform-incubator-phase-2
Phase 3: https://www.dashcentral.org/p/dash-platform-incubator-phase-3 
## 1.2 Goals
Dash Incubator is an open-source blockchain-funded app that distributes Dash proposal rewards to anyone who can provide open-source output that adds value to Dash. The  focus is creating useful Dapps and scaling the Platform ecosystem.

The fund’s aim is to provide a fully incentivized work system that’s easy to use so anyone can earn Dash for contributing valuable output, both for Dash Incubator and as a model / system anyone else can ‘white label’ into their own fund within the Dash ecosystem.
## 1.3 Strategy
The current strategy of the fund is to: 

Incentivize early-stage development of tools, resources, dapps and protocol enhancements for Dash Platform on EvoNet and leading to Testnet
Foster and grow a developer community and related ecosystem around Dash’s forthcoming Evolution upgrade.
Innovate new and decentralized ways to utilize Dash’s blockchain funding that others can reuse easily 
## 1.4 Ownership
The fund doesn’t own anything including any rights to any output, nor does the fund apply any restrictions on providers' usage of their own output. This incentivizes entrepreneurs to invest in and create ventures using Dash.  One caveat is that some data associated with the fund is controlled by centralized entities and tooling (e.g. Trello, Google, etc), but this can be decentralized when the work system migrates to Dash Platform.

All work procured by the fund must be open-source and licensed under MIT license.
## 1.5 Transparency
The fund itself must always be fully open-source and transparent, with all payments out of the wallet matching procurements offered and completed publicly via users of the Incubator app, so that all information is accessible and auditable by anyone.
## 1.6 Roadmap
Currently we’re in version 1 of the Incubator app.  In addition to constant maturing of rules / adding new features that are deemed useful, the roadmap consists of 3 additional versions:

Version 1: Readonly frontend website using Trello and Gdocs for the backend
Version 2: CRUD enabled website using (public) database on the backend 
Version 3: Dapified website using Dash for the backend
Version 4: Dapified funding; MNOs fund Dapps directly from block reward



# 2 System
Work is obtained by offering bounties in the form of Dash rewards to anyone who produces some specific output via the work system.

That output can be anything from working code for a Dapp on Dash Platform, hosting a block explorer, or administering the fund itself. 
## 2.1 Pipeline
Each piece of work for the fund is represented by a card on Trello. That work goes through a fixed set of stages in the system represented by lists arranged as columns on the trello board that the card progresses through from left to right. 

The board and columns represent a pipeline of all work being procured by the fund, from development of open-source end-user products, through to work to specify and QA that output, through to work on the fund itself such as developing the Incubator app or administering the pipeline.  In other words, all payments from the fund’s wallet must be auditable against work represented by tasks in the pipeline.

The first two lists on Trello, Concept and Specification, represent the entry point for all work into the system, which is then moved by an Admin into one of three columns depending on the category of work being undertaken (a Project, Service or Job).  Work that is completed, cancelled or deprecated has its card moved to the final Archive column.

 > Note: Sometimes work cards can be moved to a different stage - for example, once phase 1 of a web dapp is complete, it could be moved to the Services stage to incentivize hosting it on a frontend reliably & consistently, or moved back to the Specification stage to tweak a feature after a QA.

## 2.2 Tasks
A Task is the smallest unit of work procured by the fund and all work is measured by and rewarded at Task level.

Each task must produce some measurable output, making it eligible to claim a reward, with special users called Admins who are incentivized to assess and process claims.

Tasks are defined as Checklist items on the Trello board, in either the Concept, Specification, Work or QA Checklists on each Trello card.

Each Task has a description, a due date representing deadlines by when tasks must be delivered, a checkbox showing whether the task is complete, and a member who has reserved the task represented by their profile icon, who was assigned to the Task by an Admin.

Non-completed tasks without a Member assigned can be reserved, which means that an Admin will assign a Member to the task along with a due date for the work to be completed.

Once the work is completed, the Member can claim the reward for the task by leaving a comment on the Card referencing the task(s). 

If the work isn’t claimed by the due date, an Admin has the right to unreserve the task and reserve it (and its reward) for another user, although they may discuss the issue with the user in the comments:  Admins should use discretion when unreserving tasks, for example to extend the date if there are extenuating circumstances such as dependencies out of the control of the provider or settle for the portion of the valid work delivered within the task.

Work Type 
(Output)
Stages
(Trello ColumnsLists)
Concepts
Concept
Specifications
Specifications
Work Tasks
Projects, Services
QA Tasks
Specifications, Projects, Services, Jobs
Jobs
Jobs


### 2.2.1 Reserving a Task

Reserving tasks means you have exclusive rights to complete the tasks and make a claim for the reward up until the due date of the task.

To reserve a Task, write a comment on the card in Trello referencing the Checklist the task is in and the numbers you want to reserve, e.g. 

```i want to reserve work tasks 1-3```

An Admin will assign your Trello user in the checklist task on the card along with a due date for completion, or might comment if they have questions or there are issues with the reservation.

If this is the first work you are producing in the Incubator and the Admin isn’t happy to reserve a certain task for an unknown user, it might be better to build some positive reputation e.g. by completing some Jobs first or sharing some relevant past open-source output you’ve contributed.
### 2.2.2 Claiming a reward
To claim a reward on a task create a comment on the Trello card with the following information:

The name of the checklist the Task is in (e.g. Concept Tasks, Work Tasks, QA Tasks etc).
The tasks number(s) you want to claim
Link to the source for the tasks output (usually a PR or commit on Github)
Link to any deploy links relevant to the output (e.g. a URL for a website)
Specify a valid Dash address to receive the reward

Your claim will then be processed by an admin.
### 2.2.3 Processing claims
An Admin will process your claim, assessing it based on the rules for the type of output you’ve produced, whether that’s a Concept, Specification, Work task or QA Report.

If the Admin awards the claim, they’ll leave a Claim Rewarded comment on the Trello Card, otherwise they may discuss any issues directly on the card comments with you.

## 2.3 Rewards List
This will be the ‘price list’ of all work offered by the fund, listed by type of reward.

Reward Type
Paid to
Criteria
Amount
Meta %
Concept Reward
Concept Proposer
Valid Specification
1 Dash
5%
Specification Reward
Specification Writer
Valid Specification 
0.1-5 Dash
5%
Work Task (Project/Service)
WorkerProvider
QA Complete
0.1-20 Dash
5%
Job Task
WorkerProvider
Valid Job
0.1-10 Dash
5%
QA Task
QA worker
Valid QA Report
0.1-5 Dash
5%
Housekeeping, Monthly
Admin
Minimum threshold of Trello activity
5 Dash/month
0%






# 3 Work
## 3.1 Concepts
A Concept is an outline definition of some work that a user proposes the Incubator procures for Dash.This is the stage from which all work in the Incubator starts.  A concept must provide the information defined in the New Concept Template and be approved for quality by an Admin.  Concepts can relate to creating or upgrading a Project, Service or Job type of work in the Incubator app. The data required to be submitted for a valid concept is defined in the New Concept Template.

Any concept that is within budget and aligns with the current Incubator strategy, as determined by Admins, is eligible for funding.
ConceptA rewards areis paid to the user who proposeding the concept if and when it’s completed and subsequently has a completed Specification completed.

A concept must provide the information defined in the New Concept Template and be approved for quality by an Admin.

Concepts can relate to creating or upgrading a Project, Service or Job type of work in the Incubator app.

The user creating the Concept gets first-refusal on reserving the subsequent Specification task for 24hrs, provided the reservation meets the reservation criteria. 

The data required to be submitted for a valid concept is defined in the New Concept Template.

Any concept that aligns with the current Incubator strategy and is within budget should be funded, both of which are determined by Admins.

Admins take the following into account wWhen deciding which Concepts to complete and move to the Specification stage, Admins must take into account:

ROI of value proposition to Dash as a whole
Alignment with Incubator strategy
Input from other users (factoring in reputation / contributions)
Feasibility of idea in terms of available skills, developers and budget
### 3.1.1 Creating a Concept
To propose a new Concept

Fill in the info detailed in the New Concept Template document.  
Add a comment on the New Concept Card on the Trello Board, linking the template you’ve created.

Admins will then review your concept, and if it satisfies the Concept requirements it will be added as a new card in the Concepts list on Trello.  

An admin may ask you to expand on or amend some of the info in the template doc you posted.  

The admin will also reserve the task for you, so that you can claim a Concept Reward if the concept completes the specification stage.

Concepts provide fixed rewards as specified in the Price List. 
#### 3.1.2 Claiming a Concept Reward

Once an Admin has marked your reserved concept task(s) as completed, it will be moved to the Specification stage.  When the relevant Specification tasks have been completed, you can claim your Concept Reward.
## 3.2 Specifications
A Specification is a detailed definition of the work that needs to be completed, including criteria for QA of that work.

Specification tasks comprise the production of a valid Specification that involves taking a Concept and defining the criteria (such as features) that then allows a user to implement the concept, the quality of which is measurable against the Specification that includes the QA tasks to validate it’s fitness for purpose and subsequent rewards to the providers involved.

Specification tasks relate to the production of a document based on the Specification Template that a user produces on a task they’ve previously reserved.
### 3.2.1 Reserving a Specification Task

Unassigned Specification tasks can be found on the Trello Board and listed on the Incubator website.  Follow the Reservations process to reserve a specification task.
### 3.2.2 Claiming a Specification Reward
Once a specification task is complete you can claim a reward for the work that will then be assessed by an Admin by following the Claims process.



## 3.3 Projects
Projects are work that produce a Dapp or some other usually IP based output, such as developing a block explorer, with rewards negotiated with the provider.
### 3.3.1 Project Tasks
Project tasks represent individual pieces of work that are part of delivering a Project such as developing features in a Dapp.

Project tasks They are created by an Admin and appear in the Project Tasks checklist on the Trello card for the project.
### 3.3.2 Reserving a Project Task
Unassigned Project tasks are found on the Trello Board and listed on the Incubator website.  Follow the Reservations process to reserve a project task.
### 3.3.3 Claiming a Project Reward
Once a project task is complete you can claim a reward for the work that will then be assessed by an Admin by following the Claims process.


## 3.4 Services
Services are ongoing tasks that pay rewards based on some key performance indicator (KPI).  For example, receiving a reward for hosting a website with 95% uptime on a month-to-month basis.

Project tasks represent individual pieces of work that are part of delivering a Project such as developing features in a Dapp. They are created by an Admin and appear in the Project Tasks checklist on the Trello card for the project.
### 3.4.1 Reserving a Service Task
Unassigned Project tasks are found on the Trello Board and listed on the Incubator website.  Follow the Reservations process to reserve a project task.
### 3.4.2 Claiming a Service Reward
Once a project task is complete you can claim a reward for the work that will then be assessed by an Admin by following the Claims process.

## 3.5 Jobs
Jobs are on-off tasks with rewards that can be claimed without needing to reserve the task, such as a bug bounty, fixing a Github issue or adding content to the Incubator website, for a fixed price.
### 3.5.1 Claiming a Job Reward
Jobs arecan be found on the Trello Board and listed on the Incubator website.  Follow the Claims process to reserve a project task.
## 3.6 QA
Quality Assurance tasks validate work tasks (Project, Service or Job),.

QA Tasks each refering to a Work task in their description.

QA Tasks They can be reserved and the output should be a QA Report Template unless the admin requests some alternative information.
### 3.6.1 Reserving a Service Task
Unassigned QA tasks can be found on the Trello Board and listed on the Incubator website.  Follow the Reservations process to reserve a QA task.
### 3.6.2 Claiming a Service Reward
Once a QA task is complete you can claim a reward for the work that will then be assessed by an Admin by following the Claims process.


# 4 Admins
This section relates to the special Admin role and rules on how they operate.

Admins work to facilitate the production of output and regulate the operations of the fund itself.

Admin rewards come from tasks themselves in the form of a % of the task reward added to the value, as defined in the price list, to incentivize ownership of the task in terms of helping it to be completed.

Admins checks that data is correct and following the protocol defined in this document, and moderates where needed.

Users with Admin privileges can reserve any Tasks for themselves provided they’re not also assigned to complete the task, to avoid any conflicts of interest.

Currently Admins are appointed by the Incubator’s Proposal Owner on Dash who also has vito permissions on Admin decisions and responsibility for maintaining the app rules and payment of rewards from the Proposal address (although the goal is to decentralize this role in future via dapification).
## 4.1 Permissions
Admins are configured as Members of the Trello Board, who are the only users who can change data on the board.  Any public user can comment but not edit anything on the board.  Users who take on work and therefore need to be assigned to tasks by admins, should be added as Observers by an admin, either manually or via the observer Invite Link.
## 4.2 Cards
Admins are the only users with permission to create and edit cards, and change their status by moving them forwards or backwards through the pipeline (left or right across Trello columns), non-admin users can comment on Cards only (these permissions are configured on Trello).

Admins must create cards using the ‘Create Concept’ button on the main menu in Trello, and in response to a user’s request for a new concept comment on the New Concept card at the top of the Concepts list.  

### 4.2.1 Card Owner
When an admin creates a card, they are known as the Card’s owner and retain the right to earn admin rewards on all the card’s tasks.  To signify the card owner they must assign their member to the card in Trello (using the ‘Add to card->Members’ option on the right side of the card).  This card-level assignment is displayed on the front of the card on the Trello board.

An Admin can delegate ownership of a card to another Admin, by clearly stating that in the comments, and changing the card’s member to the other admin.  Delegating ownership also means delegating task rewards to the other admin for any in-progress or unassigned tasks.

Cards should always have only one member assigned at a time and who is the card owner.

Note that Admins can’t complete any non-admin tasks on Cards they own, in other words they can’t assign or assess their own work on a card.
### 4.2.2 Card Description
Description should just contain the Value Proposition from the New Concept Template submitted when the Card was created, and a link to that info so anyone can read the concept.
### 4.2.3 Custom Fields
Custom fields (using the Trello Powerup) should be set by the Admin at the Concept stage and provide basic background info / category for the Card.
## 4.3 Task Admin
### 4.3.1 Task Format
All tasks must be specified in the relevant Checklist on the Trello card, with the following format, to allow API retrieval:

[taskId]) [taskDescription]([amount] DASH)

For example:

Fix current build issue (1 Dash)

When a task is reserved, it must also have a due date and a member who reserved it set using the relevant functions on Trello’s advanced checklist. 
### 4.3.2 Task Scope
The description field of the task, i.e more broadly the requirements by which the task will be assessed as completed or not, is up to the discretion of the Admin.

Unless the Task is a small piece of work that’s easy to test / know if it’s completed correctly, the Admin should link some info from the Task description describing the criteria for completion of the task.

For Specification tasks, the scope could be quite broad, for example R&D that’s required, feasibility studies, analysis.. It’s up to the admin to decide how best to define Tasks to achieve the best results.
### 4.3.3 Task QA
Most tasks in Projects, Services and Jobs should require related QA tasks, which should be created at the time of the Work Task, so that there is a clear metric of what the Work task needs to achieve, and how the QA (and the Admin that approves the QA’s claim) can validate that.

QA Tasks must reference the relevant task (i.e. one of the other checklists on the card) and produce some QA report output.

**Format:**
[qaTaskId])[checklistName]([taskIds])([amount] Dash)

For example:

QA: Work Tasks (1,2) using spec section 5 (0.1 Dash)

QA Rewards are set as a % added to the relevant Task the QA refers to, defined in the Rewards List.

QA Tasks claims should be requested by users and processed by Admins like regular work tasks.
### 4.3.4 Task Reservations
An Admin can reserve an unassigned task on a Card where a user has left a valid Reservation Request Comment.

Where the comment is invalid, or for another reason such as lack of reputation or some previous issue,  an Admin should reply to the comment to advise that the reservation request was denied and the reasons why.

An admin must reply to the user with a valid confirm reservation comment as follows:

```@username reserved tasks: 1,2,3,4,5```

This comment alerts the user that the relevant tasks were reserved and provides the admin’s proof to claim their % of the task(s) reward once they are awarded.

The admin must also assign the user to the tasks in the Specification Tasks checklist, which will show the task as reserved on the Incubator website.
### 4.3.5 Task Claims
When an Admin wants to award a user’s claim comment, they add a Claim Awarded comment as follows:

```[@username] Awarded: [checklistName]([taskIds])([amount] Dash)```

For example:

```@somedev Awarded: Work Tasks (1,2) (1 Dash)```

If there is an issue with the claim, for example some info was missing like a Dash address, or there was an issue with the work, the Admin should try to resolve the issue fairly with the user via the comments section.
## 4.4 Admin Rewards
Admins receive a % of the Tasks reward awarded on cards they own.

To claim an admin reward, the Admin creates a claim comment the same as a user does, but referencing the user’s task, which must be completed (checked on the relevant checklist on the card on Trello).

A different admin must award the claim with a Claim Awarded comment on the card.  If the other admin sees an issue with the claim they should discuss and try to resolve it with the Admin in the comments.

Awarded claims of any users (including Admins) must be entered into the Claims spreadsheet with the full required info for the payment to be completed.  After they’ve been paid and the txid entered into the sheet, the Admin who awarded the claim should reply to the claim user with the txid in the comment.


