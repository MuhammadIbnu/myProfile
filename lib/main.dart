import 'package:flutter/material.dart';
import 'package:myprofile/pages/Home_page.dart';

import 'package:flutter/material.dart';
import 'package:myprofile/widget/theme_inherited_widget.dart';

import 'config/themes.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ThemeSwitcherWidget(
      initialDarkModeOn: false,
      child: ibnu(),
    );
  }
}
class ibnu extends StatelessWidget {
  const ibnu({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Muhammad Ibnu SUbhan',
      theme:ThemeSwitcher.of(context).isDarkModeOn?darkTheme(context):lightTheme(context),
      home: HomePage(),
    );
  }
}