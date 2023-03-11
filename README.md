# gorkhabanking
a banking software by gorkha student
#include<stdio.h>
#include<conio.h>
main()
{
char name[50];
char address[50];
char telno[50];
FILE *fp;
int i,n;
fp=fopen("a.dat","a");
printf("How many records:");
scanf("%d",&n);
for(i=0;i<n;i++)
{
printf("\nEnter the name:");
scanf("%s",name);
printf("\nEnter the address:");
scanf("%s",address);
printf("\nEnter the telphone:");
scanf("%s",telno);
fprintf(fp,"\n%s\t%s\t%s",name,address,telno);
}
fclose(fp);
fp=fopen("a.dat","r");
printf("Name\tAddress\t\tTelNo\n");
while(fscanf(fp,"%s%s%s",name,address,telno)!=EOF)
{
printf("\n%s\t%s\t%s",name,address,telno);
}
fclose(fp);
getch();
}
