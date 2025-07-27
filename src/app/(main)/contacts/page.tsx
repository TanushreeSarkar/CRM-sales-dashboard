"use client";

import React, { useState } from 'react';
import { contacts as mockContacts } from '@/lib/mock-data';
import type { Contact } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Tag, FileText } from 'lucide-react';

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);
  const [noteContent, setNoteContent] = useState('');
  const [tagInput, setTagInput] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveNote = () => {
    if (!currentContact) return;
    const updatedContacts = contacts.map(c =>
      c.id === currentContact.id ? { ...c, notes: noteContent } : c
    );
    setContacts(updatedContacts);
  };
  
  const handleAddTag = () => {
    if (!currentContact || !tagInput) return;
    const updatedContacts = contacts.map(c =>
        c.id === currentContact.id ? { ...c, tags: [...c.tags, tagInput] } : c
    );
    setContacts(updatedContacts);
    setTagInput('');
  }

  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('');

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
        <p className="text-muted-foreground">Manage your contact lists and interactions.</p>
      </div>
      <Input
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={contact.avatar} data-ai-hint="person face" />
                  <AvatarFallback>{getInitials(contact.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{contact.name}</CardTitle>
                  <CardDescription>{contact.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{contact.email}</p>
              <div className="flex flex-wrap gap-1">
                {contact.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Dialog onOpenChange={(open) => { if (open) { setCurrentContact(contact); setTagInput(''); }}}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm"><Tag className="mr-2 h-4 w-4" />Tags</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Edit Tags for {currentContact?.name}</DialogTitle></DialogHeader>
                  <div className="flex flex-wrap gap-2">
                    {currentContact?.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="New tag..." />
                    <Button onClick={handleAddTag}>Add</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog onOpenChange={(open) => { if(open) {setCurrentContact(contact); setNoteContent(contact.notes || '')}}}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm"><FileText className="mr-2 h-4 w-4" />Notes</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Notes for {currentContact?.name}</DialogTitle></DialogHeader>
                  <Textarea
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    rows={6}
                    placeholder="Add notes here..."
                  />
                  <DialogFooter>
                    <DialogClose asChild><Button onClick={handleSaveNote}>Save Notes</Button></DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
