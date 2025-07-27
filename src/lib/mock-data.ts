import type { Customer, Contact, Task, Kpi } from "@/types";
import { Users, DollarSign, ShoppingCart, BarChart, ArrowUp, ArrowDown } from "lucide-react";

export const customers: Customer[] = [
  { id: 'CUST001', name: 'John Doe', email: 'john.doe@innovate.com', company: 'Innovate Inc.', status: 'active', created_at: '2023-01-15', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST002', name: 'Jane Smith', email: 'jane.smith@techcorp.com', company: 'TechCorp', status: 'active', created_at: '2023-02-20', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST003', name: 'Samuel Green', email: 'sam.green@solutions.io', company: 'Solutions.io', status: 'lead', created_at: '2023-03-10', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST004', name: 'Emily Brown', email: 'emily.brown@webify.com', company: 'Webify', status: 'churned', created_at: '2022-12-05', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST005', name: 'Michael Johnson', email: 'michael.j@datalytics.com', company: 'Datalytics', status: 'active', created_at: '2023-04-01', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST006', name: 'Linda Williams', email: 'linda.w@cloudnine.com', company: 'CloudNine', status: 'lead', created_at: '2023-05-18', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST007', name: 'David Wilson', email: 'david.wilson@nexgen.com', company: 'NexGen', status: 'active', created_at: '2023-01-25', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST008', name: 'Patricia Miller', email: 'patricia.m@visionary.com', company: 'Visionary', status: 'active', created_at: '2023-03-30', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST009', name: 'Robert Davis', email: 'robert.d@synergy.com', company: 'Synergy Co.', status: 'churned', created_at: '2022-11-11', avatar: 'https://placehold.co/32x32.png' },
  { id: 'CUST010', name: 'Jennifer Garcia', email: 'jenn.g@quantum.com', company: 'QuantumLeap', status: 'lead', created_at: '2023-06-02', avatar: 'https://placehold.co/32x32.png' },
];

export const contacts: Contact[] = [
    { id: 'CONT001', name: 'Alice Johnson', email: 'alice.j@innovate.com', role: 'Project Manager', lastContacted: '2023-06-15', tags: ['High Priority', 'Follow-up'], avatar: 'https://placehold.co/40x40.png', notes: 'Discussed Q3 roadmap. Sent proposal.' },
    { id: 'CONT002', name: 'Bob Williams', email: 'bob.w@techcorp.com', role: 'Lead Developer', lastContacted: '2023-06-20', tags: ['Technical'], avatar: 'https://placehold.co/40x40.png', notes: 'Needs API documentation.' },
    { id: 'CONT003', name: 'Charlie Brown', email: 'charlie.b@solutions.io', role: 'Marketing Head', lastContacted: '2023-05-30', tags: ['Marketing', 'Campaign'], avatar: 'https://placehold.co/40x40.png' },
    { id: 'CONT004', name: 'Diana Prince', email: 'diana.p@nexgen.com', role: 'CEO', lastContacted: '2023-06-01', tags: ['Decision Maker', 'High Priority'], avatar: 'https://placehold.co/40x40.png', notes: 'Finalizing contract details.' },
    { id: 'CONT005', name: 'Ethan Hunt', email: 'ethan.h@datalytics.com', role: 'Data Analyst', lastContacted: '2023-06-18', tags: ['Data', 'Analytics'], avatar: 'https://placehold.co/40x40.png' },
];

export const tasks: Task[] = [
  { id: 'TSK001', title: 'Follow up with Innovate Inc.', status: 'in-progress', dueDate: '2023-07-25', priority: 'high' },
  { id: 'TSK002', title: 'Prepare Q3 report', status: 'todo', dueDate: '2023-07-30', priority: 'medium' },
  { id: 'TSK003', title: 'Onboard TechCorp team', status: 'done', dueDate: '2023-06-20', priority: 'high' },
  { id: 'TSK004', title: 'Send invoice to Datalytics', status: 'todo', dueDate: '2023-07-22', priority: 'low' },
  { id: 'TSK005', title: 'Schedule demo for Solutions.io', status: 'in-progress', dueDate: '2023-07-28', priority: 'medium' },
  { id: 'TSK006', title: 'Review NexGen contract', status: 'done', dueDate: '2023-06-15', priority: 'high' },
];

export const kpiData: Kpi[] = [
    { title: 'New Customers', value: 45, change: 12.5, icon: Users },
    { title: 'Revenue', value: 120500, prefix: '$', change: 8.2, icon: DollarSign },
    { title: 'Conversion Rate', value: 2.5, suffix: '%', change: -1.8, icon: BarChart },
    { title: 'Avg. Deal Size', value: 2678, prefix: '$', change: 5.1, icon: ShoppingCart },
]

export const monthlyRevenue = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 48000 },
  { month: 'Mar', revenue: 52000 },
  { month: 'Apr', revenue: 49000 },
  { month: 'May', revenue: 55000 },
  { month: 'Jun', revenue: 60000 },
];

export const customerGrowth = [
  { month: 'Jan', customers: 120 },
  { month: 'Feb', customers: 130 },
  { month: 'Mar', customers: 145 },
  { month: 'Apr', customers: 150 },
  { month: 'May', customers: 162 },
  { month: 'Jun', customers: 175 },
];

export const dealStageDistribution = [
  { stage: 'Prospecting', value: 25, fill: 'var(--color-chart-1)' },
  { stage: 'Qualification', value: 30, fill: 'var(--color-chart-2)' },
  { stage: 'Proposal', value: 15, fill: 'var(--color-chart-3)' },
  { stage: 'Negotiation', value: 10, fill: 'var(--color-chart-4)' },
  { stage: 'Closed', value: 20, fill: 'var(--color-chart-5)' },
];
