import prisma from "../database";
import Mutation from "./mutation";
import Query from "./query";

const Student = {
  dept: (parent: any) => {
    return prisma.student
      .findUnique({
        where: { id: parent.id },
      })
      .dept();
  },
};

const Teacher = {
  courses: (parent: any) => {
    return prisma.teacher
      .findUnique({
        where: { id: parent.id },
      })
      .courses();
  },
};

const Course = {
  dept: (parent: any) => {
    return prisma.course
      .findUnique({
        where: { id: parent.id },
      })
      .dept();
  },
  teacher: (parent: any) => {
    return prisma.course
      .findUnique({
        where: { id: parent.id },
      })
      .teacher();
  },
};

const Department = {
  courses: (parent: any) => {
    return prisma.department
      .findUnique({
        where: { id: parent.id },
      })
      .courses();
  },
  students: (parent: any) => {
    return prisma.department
      .findUnique({
        where: { id: parent.id },
      })
      .students();
  },
};

const resolvers = {
  Student,
  Teacher,
  Course,
  Department,
  Query,
  Mutation,
};

export default resolvers;
