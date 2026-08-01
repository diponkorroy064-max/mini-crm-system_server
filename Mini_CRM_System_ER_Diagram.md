# Mini CRM System
## Entity Relationship Diagram

<div style="page-break-after: always;"></div>

### Document Overview
This document presents the database architecture for the Mini CRM System. It describes the core relational design for the `User` and `Task` entities, explains their keys and attributes, and illustrates the entity relationship model with a clear diagram. The document is prepared as a formal assignment-style submission with academic structure, professional layout, and a monochrome presentation suitable for export to PDF.

### Database Architecture Summary
The Mini CRM System database is designed with a minimal but robust relational structure to support two user roles: `ADMIN` and `STAFF`. It uses a normalized schema with a single `User` table and a `Task` table. The `User` table stores authentication and role information, while the `Task` table stores task metadata, status, priority, and references to the user who created the task and the user assigned to execute it.

These relationships are modeled using foreign keys to ensure referential integrity. Each task is linked to one creator and one assignee. One `User` can create many tasks, and one `User` can also be assigned many tasks. This supports workflow tracking, ownership, and role-based task management while keeping the schema simple and easy to maintain.

---

## 1. ER Diagram

Below is the ER diagram for the Mini CRM System database, shown in a professional box-and-arrow layout. Primary keys are marked with `PK`, foreign keys are marked with `FK`, and relationship cardinalities are clearly labeled.

```
+---------------------------+                         +---------------------------+
|          USER             |                         |          TASK             |
|---------------------------|                         |---------------------------|
| PK id                     |                         | PK id                     |
|   name                    |                         |   title                   |
|   email (UNIQUE)          |                         |   description             |
|   password                |                         |   status                  |
|   role (ADMIN/STAFF)      |                         |   priority                |
|   createdAt               |                         |   dueDate                 |
|   updatedAt               |                         |   createdAt               |
|                           |                         |   updatedAt               |
+---------------------------+                         +---------------------------+
         | 1                          | 1
         | creates                    | assigned to
         |                            |
         +----------------------------+----------------------------+
         |                            |                            |
         | FK createdById             | FK assignedToId             |
         | -> TASK.createdById        | -> TASK.assignedToId        |
         | M                          | M                          |

Legend:
- PK = Primary Key
- FK = Foreign Key
- `1` and `M` indicate one-to-many relationships
- `createdById` preserves creator ownership
- `assignedToId` preserves staff assignment
```

### Relationship Annotations
- `USER.id` → `TASK.createdById`: one `User` can create many `Task` records.
- `USER.id` → `TASK.assignedToId`: one `User` can be assigned many `Task` records.

The diagram shows a single `USER` entity connected to the `TASK` entity through two distinct foreign-key relationships. This captures both administrative task creation and staff task assignment within the same user table.

---

## 2. Entity Description

### 2.1 USER
| Attribute | Type | Constraint | Description |
|---|---|---|---|
| id | INT / UUID | PK | Unique identifier for each user |
| name | VARCHAR | NOT NULL | Full name of the user |
| email | VARCHAR | UNIQUE, NOT NULL | Email address used for login and communication |
| password | VARCHAR | NOT NULL | Hashed password for secure authentication |
| role | ENUM | NOT NULL | User role, either `ADMIN` or `STAFF` |
| createdAt | DATETIME | NOT NULL | Timestamp when the user was created |
| updatedAt | DATETIME | NOT NULL | Timestamp when the user was last updated |

The `USER` table centralizes identity, access control, and role classification. It is authoritative for both administrators and staff members.

### 2.2 TASK
| Attribute | Type | Constraint | Description |
|---|---|---|---|
| id | INT / UUID | PK | Unique identifier for each task |
| title | VARCHAR | NOT NULL | Short title that summarizes the task |
| description | TEXT | NULLABLE | Detailed description of the work to be done |
| status | ENUM | NOT NULL | Current task state: `PENDING`, `IN_PROGRESS`, `COMPLETED` |
| priority | ENUM | NOT NULL | Importance level: `LOW`, `MEDIUM`, `HIGH` |
| dueDate | DATETIME | NULLABLE | Scheduled deadline for completion |
| createdById | INT / UUID | FK → USER.id | Creator of the task; typically an admin or staff user |
| assignedToId | INT / UUID | FK → USER.id | Staff user responsible for completing the task |
| createdAt | DATETIME | NOT NULL | Timestamp when the task was created |
| updatedAt | DATETIME | NOT NULL | Timestamp when the task was last modified |

The `TASK` table captures the core CRM workflow items. It includes both planning information and the user relationships needed to enforce accountability.

---

## 3. Relationship Description

### 3.1 USER to TASK (created tasks)
- Type: One-to-Many
- Source: `USER.id`
- Target: `TASK.createdById`
- Meaning: A single user may create zero or more tasks. Each task must have one creator.
- Business intent: Track task ownership and author metadata for auditing, filtering, and accountability.

### 3.2 USER to TASK (assigned tasks)
- Type: One-to-Many
- Source: `USER.id`
- Target: `TASK.assignedToId`
- Meaning: A single user may be assigned zero or more tasks. Each task is assigned to one responsible user.
- Business intent: Support task delegation and assignment workflows for staff members.

### 3.3 Combined Relationship View
Although there is a single `USER` entity, the schema uses two separate foreign keys in the `TASK` table to represent distinct business roles:
- `createdById` links a task to its author.
- `assignedToId` links a task to its executor.

This design avoids duplication of the user entity while preserving clear relational semantics.

---

## 4. Design Notes

- The schema is intentionally normalized to avoid redundant user tables.
- Using a single `USER` table with role-based distinction simplifies authentication, authorization, and administration.
- Foreign keys enforce referential integrity: tasks cannot reference users that do not exist.
- The `status` and `priority` fields use controlled enumerations to ensure consistent task state and priority values.
- Timestamp fields enable auditing and support interfaces such as recent activity lists and task history views.
- The dual foreign-key approach provides flexibility: a task author and a task assignee may be the same user or different users without requiring duplicate user records.

---

## 5. Academic Presentation
This document is formatted for a professional engineering report:
- clear section numbering
- formal headings
- structured tables for entity definitions
- diagram section with explicit PK/FK notations
- concise relationship descriptions

The layout is consistent with an A4 portrait export and uses only black-and-white styling. It is suitable for submission as part of a university project or assignment.
