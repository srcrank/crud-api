/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {

  constructor(
    @InjectRepository(Issue) private issueRepository: Repository<Issue>,
    ) {}

  create(createIssueDto: CreateIssueDto) {
    const newIssue = this.issueRepository.create(createIssueDto);

    return this.issueRepository.save(newIssue);
  }

  findAll() {
    return this.issueRepository.find();
  }

  findOne(id: number) {
    return this.issueRepository.findOne(id);
  }

 async update(id: number, updateIssueDto: UpdateIssueDto) {
    //query post
    const issue = await this.findOne(id);

    issue.title = updateIssueDto.title;
    return this.issueRepository.save(issue);
  }

  async remove(id: number) {
    const issue = await this.findOne(id);

    return this.issueRepository.remove(issue);
  }
}
