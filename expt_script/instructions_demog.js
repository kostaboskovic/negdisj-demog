//CONSENT
first_page_instruction =
        [`
        <div style="text-align:left;
                  line-height:normal;
                  padding-left:10%;
                  padding-right:10%">
        <p>This experiment is being conducted by researchers at UC San Diego Language
        and Development Lab. Before you decide to participate, please read the following information carefully: </p>
        <br>
        <p>In this study, a character will hide candy and give clues about where they hid the candy.<p>
        
        This study is part of a larger project that explores children's 
     developing comprehension of logical language (e.g., "and", "or", "not", etc.).</p>
      <p>If you have previously completed this study or a similar one, please inform the researcher. 
        We expect the study to last approximately 10 minutes, 
        including the time it takes to read instructions.</p>`]

consent_form = [`
      <div style="text-align:left;
                  line-height:normal;
                  padding-left:10%;
                  padding-right:10%">
      <p><b><u>Please click 'Next' if you consent to your child's participation in this experiment:</u></b></p>
      <p>This study is part of a larger project that is exploring children's 
      cognitive development.</p>
      <p>By answering the questions in this study, you consent for your child to participate
        in research conducted by Professor David Barner at the University of 
        California, San Diego. If you have any questions about the study, you 
        may reach our lab at <a href="mailto:ladlab.ucsd@gmail.com">ladlab.ucsd@gmail.com</a>
        You may also call the Human Research Protections Program at (858) 246-4777 
        for more information about their rights as a research subject, or to 
        report research-related problems.</p>
      <p> Participation in the study is completely voluntary on the part of both you and your child. If you choose
not to allow your child to participate, there will no negative consequences for you or for your child. Your
child may withdraw from the study at any time for any reason. There will be no direct benefit to children
who participate in the study. Risks to participants are minimal and should be no greater than those
experienced in everyday social interactions. Although most children enjoy participating in this type of
research, on rare instances a child may become bored or may worry that they may have answered a
question “incorrectly.” All of our studies investigate general patterns of responses among groups of
children of different ages, rather than the responses of any particular child in isolation. As with all research, there is a potential for the loss of confidentiality. To minimize this risk, information from study
participants will be identified with a subject number and will be referenced exclusively by this number in data
collection, data sharing, and analyses. The database that relates the subject number to a specific participant will be
protected in the researchers’ office.
        Your child must be 4 years of age to participate.</p>

        <p>Title: Quantification and Language Development. PI: David Barner. 
        IRB Protocol #171652. Approved: May 02, 2022 01:31PM PDT.</p>
        </div>
        `]

///////////////////////// demog questions /////////////////////////
demog_instr = ["We would like to ask a few questions about your child. Your answers will remain confidential."]
demog_require_answer = '<p style="font-size:small;">Questions marked with <font color="brown">*</font> require response.</p>'
label_done = "Done!"


demog_current_country_instr = `Where do you currently live? Choose a country from the dropdown menu.`
demog_language_first_instr = "Is English your child's primary language (or one of their primary languages)?"
demog_language_others_instr = `What other language(s) can your child speak or understand at all, even if they aren't fluent?
                              </br><p style="font-size:small">If they can speak or understand multiple other languages, you 
                                will have the opportunity to answer this question multiple times.<br>Please leave the answer 
                                blank and click 'Continue' once you have answered with all the languages they can speak or understand.<p>` 
demog_language_first_opts = ["Yes", "No"]

demog_dob_instr = "What is your child's date of birth? (MM/DD/YYYY)"
demog_gender_instr = "What is your child's gender?"
demog_gender_opts = ["Female", "Male", "Decline to answer"]
demog_ethnic_instr = `What is your child's racial or ethnic identification? <p style="font-size:small">Please select all that apply.</p>`
demog_ethnic_opts = ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Middle Eastern or North African", "Native Hawaiian or Pacific Islander", "White", "Other"]


demog_objective_ses_instr = `What is the highest degree or level of school you have completed?`
demog_objective_ses_opts = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school']

////////////////////// demog questions end ////////////////////////
