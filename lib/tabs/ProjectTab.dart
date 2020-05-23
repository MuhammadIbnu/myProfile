import 'package:flutter/material.dart';
import 'package:myprofile/widget/project_widget.dart';
import 'package:myprofile/widget/responsive_widget.dart';
import 'package:myprofile/config/projects.dart';

class ProjectTab extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: GridView.count(
          padding: EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 32.0),
          crossAxisCount: 3,
          childAspectRatio: MediaQuery.of(context).size.width /
              (MediaQuery.of(context).size.height / 1.3),
          children: List.generate(
              projects.length, (index) => ProjectWidget(projects[index], 0)),
        ),
      smallScreen: ListView.builder(
          itemCount: projects.length,
          itemBuilder: (context, index) => ProjectWidget(
              projects[index], (index == projects.length - 1 ? 16.0 : 0))),
    );
  }
}