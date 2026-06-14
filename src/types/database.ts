export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];
export type UserRole = "owner" | "school_admin" | "principal" | "teacher" | "accountant" | "receptionist" | "parent" | "student";
export type PersonStatus = "active" | "inactive" | "graduated" | "transferred" | "suspended" | "archived";
export type AttendanceStatus = "present" | "absent" | "late" | "excused";
export type InvoiceStatus = "draft" | "pending" | "partially_paid" | "paid" | "overdue" | "waived" | "cancelled";

export type Database = {
  public: { Tables: {
    schools: { Row: { id: string; name: string; slug: string; timezone: string; status: PersonStatus } };
    profiles: { Row: { id: string; user_id: string | null; school_id: string | null; role: UserRole; full_name: string; status: PersonStatus } };
    students: { Row: { id: string; school_id: string; admission_number: string; first_name: string; last_name: string; status: PersonStatus } };
    teachers: { Row: { id: string; school_id: string; staff_number: string; first_name: string; last_name: string; department: string | null; status: PersonStatus } };
    classes: { Row: { id: string; school_id: string; name: string; capacity: number; status: PersonStatus } };
    attendance_records: { Row: { id: string; school_id: string; student_id: string; status: AttendanceStatus } };
    invoices: { Row: { id: string; school_id: string; student_id: string; invoice_number: string; amount: number; paid_amount: number; status: InvoiceStatus } };
  } };
};
