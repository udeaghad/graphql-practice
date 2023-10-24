import prisma from "../database";

interface QueryStudentArgs {
  id: string;
}
interface QueryDepartmentArgs {
  id: string;
}
interface QueryCourseArgs {
  id: string;
}
interface QueryTeacherArgs {
  id: string;
}

const Query = {
  enrollments: () => {
    return prisma.student.findMany({
      where: { enrolled: true}
    })
  },

  students: () => {
    return prisma.student.findMany({})
  },

  student: (parent: any, args: QueryStudentArgs) => {
    const {id} = args;
    return prisma.student.findFirst({
      where: {id}
    })
  },

  departments: () => {
    return prisma.department.findMany({})
  },

  department: (parent: any, args: QueryDepartmentArgs) => {
    const {id} = args

    return prisma.department.findUnique({
      where: {id}
    })
  },

  courses: () => {
    return prisma.course.findMany({})
  },

  course: (parent:any, args: QueryCourseArgs) => {
    const {id} = args;
    return prisma.course.findUnique({
      where: {id}
    })
  },

  teachers: () => {
    return prisma.teacher.findMany({})
  },

  teacher: (_: any, args: QueryTeacherArgs) => {
    const {id} = args;
    return prisma.teacher.findFirst({
      where: {id}
    })
  }
}

export default Query;