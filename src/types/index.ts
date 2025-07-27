export type Customer = {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'active' | 'lead' | 'churned';
  created_at: string;
  avatar: string;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  role: string;
  lastContacted: string;
  tags: string[];
  notes?: string;
  avatar: string;
};

export type Task = {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
};

export type Kpi = {
    title: string;
    value: number;
    prefix?: string;
    suffix?: string;
    change: number;
    icon: React.ElementType;
}
