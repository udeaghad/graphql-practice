import prisma from "../database";

interface MutationStudentArgs {
  id?: string;
  email: string;
  fullName: string;
  deptId: string;
}

interface MutationTeacherArgs {
  data: {
    id?: string;
    email: string;
    fullName: string;
  };
}

interface MutationCourseArgs {
  code: string;
  title: string;
  teacherEmail: string;
  deptId: string;
}

interface MutationDepartmentArgs {
  name: string;
  description: string;
}

const Mutation = {
  registerStudent: (parent: any, args: MutationStudentArgs) => {
    const { email, fullName, deptId } = args;

    return prisma.student.create({
      data: {
        email,
        fullName,
        dept: {
          connect: { id: deptId },
        },
      },
    });
  },
  enroll: (parent: any, args: MutationStudentArgs) => {
    const { id } = args;
    return prisma.student.update({
      where: { id },
      data: { enrolled: true },
    });
  },

  createTeacher: (parent: any, args: MutationTeacherArgs) => {
    const { data } = args;
    return prisma.teacher.create({
      data: {
        email: data.email,
        fullName: data.fullName,
      },
    });
  },

  createCourse: (parent: any, args: MutationCourseArgs) => {
    const { code, title, teacherEmail, deptId } = args;
    return prisma.course.create({
      data: {
        code,
        title,
        teacher: {
          connect: { email: teacherEmail },
        },
        dept: {
          connect: { id: deptId },
        },
      },
    });
  },

  createDepartment: (parent: any, args: MutationDepartmentArgs) => {
    const { name, description } = args;
    return prisma.department.create({
      data: {
        name,
        description,
      },
    });
  },
};

export default Mutation;
