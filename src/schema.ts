const typeDefs = `#graphql

  type Student {
    id:              ID!      
    email:           String!   
    fullName:        String!    
    enrolled:        Boolean    
    dept:            Department!    
    createdAt:       String
    updatedAt:       String
  }

  type Department {
    id:          ID!
    name:        String!
    description: String
    students:    [Student]
    courses:     [Course]
    createdAt:    String 
    updatedAt:   String
  }

  type Teacher {
    id :   ID!
    email: String! 
    fullName: String!
    courses:  [Course]
    type:  TeacherType 
    createdAt: String
    updatedAt: String

  }

  type Course {
    id:             ID!
    code:           String!
    title:          String! 
    description:    String
    teacher:        Teacher    
    dept:           Department    
    createdAt:      String
    updatedAt:      String
  }

  input  TeacherCreateInput {
    email:    String!
    fullName: String!
    courses:  [CourseCreateWithoutTeacherInput!]
  }

  input CourseCreateWithoutTeacherInput {
    code:         String!
    title:        String!
    description:  String
  }

  enum TeacherType {
    FULLTIME
    PARTTIME
  }

  type Query {
    enrollments:           [Student!]
    students:             [Student!]
    student(id: String!):     Student
    departments:          [Department!]
    department(id: ID!):  Department
    courses:              [Course!]!
    course(id: ID!):      Course
    teachers:             [Teacher!]!
    teacher(id: ID!):     Teacher
  }

  type Mutation {
    registerStudent(email: String!, fullName: String!, deptId: String): Student!
    enroll(id: ID!): Student
    createTeacher(data: TeacherCreateInput!):Teacher!
    createCourse(code: String!, title: String!, teacherEmail: String, deptId: String): Course!
    createDepartment(name: String!, description: String): Department!
  }
`

export default typeDefs;