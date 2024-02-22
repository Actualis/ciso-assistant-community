import { test as base, expect as baseExpect, type Page} from '@playwright/test';
import { SideBar } from './sidebar.js';
import { LoginPage } from './login-page.js';
import { AnalyticsPage } from './analytics-page.js';
import { PageContent } from './page-content.js';
import { FormFieldType as type } from './form-content.js';
import { randomBytes } from 'crypto';
import testData from './test-data.js'

type Fixtures = {
    sideBar: SideBar;
    pages: {[page: string]: PageContent}
    analyticsPage: AnalyticsPage;
    assetsPage: PageContent;
    complianceAssessmentsPage: PageContent;
    evidencesPage: PageContent;
    foldersPage: PageContent;
    frameworksPage: PageContent;
    librariesPage: PageContent;
    projectsPage: PageContent;
    riskAcceptancesPage: PageContent;
    riskAssessmentsPage: PageContent;
    riskMatricesPage: PageContent;
    riskScenariosPage: PageContent;
    securityFunctionsPage: PageContent;
    securityMeasuresPage: PageContent;
    threatsPage: PageContent;
    usersPage: PageContent;
    logedPage: LoginPage;
    loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
    sideBar: async ({ page }, use) => {
        await use(new SideBar(page));
    },

    pages: async ({ page, complianceAssessmentsPage, assetsPage, evidencesPage, foldersPage, frameworksPage, librariesPage, projectsPage, riskAcceptancesPage, riskAssessmentsPage, riskMatricesPage, riskScenariosPage, securityFunctionsPage, securityMeasuresPage, threatsPage, usersPage }, use) => {
        await use({complianceAssessmentsPage, assetsPage, evidencesPage, foldersPage, frameworksPage, librariesPage, projectsPage, riskAcceptancesPage, riskAssessmentsPage, riskMatricesPage, riskScenariosPage, securityFunctionsPage, securityMeasuresPage, threatsPage, usersPage});
    },

    complianceAssessmentsPage: async ({ page }, use) => {
        const aPage = new PageContent(page, '/compliance-assessments', 'Compliance assessments', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'project', type: type.SELECT_AUTOCOMPLETE },
            { name: 'version', type: type.TEXT },
            { name: 'framework', type: type.SELECT_AUTOCOMPLETE },
            { name: 'eta', type: type.DATE },
            { name: 'due_date', type: type.DATE },
        ]);
        await use(aPage);
    },

    assetsPage: async ({ page }, use) => {
        const aPage = new PageContent(page, '/assets', 'Assets', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'business_value', type: type.TEXT },
            { name: 'folder', type: type.SELECT_AUTOCOMPLETE },
            { name: 'type', type: type.SELECT },
            { name: 'parent_assets', type: type.SELECT_AUTOCOMPLETE },
        ]);
        await use(aPage);
    },

    evidencesPage: async ({ page }, use) => {
        const ePage = new PageContent(page, '/evidences', 'Evidences', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'attachment', type: type.FILE },
            { name: 'folder', type: type.SELECT_AUTOCOMPLETE },
            { name: 'link', type: type.TEXT },
        ]);
        await use(ePage);
    },

    foldersPage: async ({ page }, use) => {
        const fPage = new PageContent(page, '/folders', 'Domains');
        await use(fPage);
    },

    frameworksPage: async ({ page }, use) => {
        const fPage = new PageContent(page, '/frameworks', 'Frameworks');
        await use(fPage);
    },

    librariesPage: async ({ page }, use) => {
        const lPage = new PageContent(page, '/libraries', 'Libraries');
        await use(lPage);
    },

    projectsPage: async ({ page }, use) => {
        const pPage = new PageContent(page, '/projects', 'Projects', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'folder', type: type.SELECT_AUTOCOMPLETE },
            { name: 'internal_reference', type: type.TEXT },
            { name: 'lc_status', type: type.SELECT_AUTOCOMPLETE },
        ]);
        await use(pPage);
    },

    riskAcceptancesPage: async ({ page }, use) => {
        const rPage = new PageContent(page, '/risk-acceptances', 'Risk acceptances', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'expiry_date', type: type.DATE },
            { name: 'folder', type: type.SELECT_AUTOCOMPLETE },
            { name: 'approver', type: type.SELECT_AUTOCOMPLETE },
            { name: 'risk_scenarios', type: type.SELECT_MULTIPLE_AUTOCOMPLETE },
        ]);
        await use(rPage);
    },

    riskAssessmentsPage: async ({ page }, use) => {
        const rPage = new PageContent(page, '/risk-assessments', 'Risk assessments', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'project', type: type.SELECT_AUTOCOMPLETE },
            { name: 'version', type: type.TEXT },
            { name: 'risk_matrix', type: type.SELECT_AUTOCOMPLETE },
            { name: 'eta', type: type.DATE },
            { name: 'due_date', type: type.DATE },
        ]);
        await use(rPage);
    },

    riskMatricesPage: async ({ page }, use) => {
        const rPage = new PageContent(page, '/risk-matrices', 'Risk matrices');
        await use(rPage);
    },

    riskScenariosPage: async ({ page }, use) => {
        const rPage = new PageContent(page, '/risk-scenarios', 'Risk scenarios', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'risk_assessment', type: type.SELECT_AUTOCOMPLETE },
            { name: 'threats', type: type.SELECT_MULTIPLE_AUTOCOMPLETE },
            { name: 'treatment', type: type.SELECT },
            { name: 'assets', type: type.SELECT_MULTIPLE_AUTOCOMPLETE },
            { name: 'existing_measures', type: type.TEXT },
            { name: 'current_proba', type: type.SELECT },
            { name: 'current_impact', type: type.SELECT },
            { name: 'security_measures', type: type.SELECT_MULTIPLE_AUTOCOMPLETE },
            { name: 'residual_proba', type: type.SELECT },
            { name: 'residual_impact', type: type.SELECT },
            { name: 'justification', type: type.TEXT },
        ]);
        await use(rPage);
    },

    securityFunctionsPage: async ({ page }, use) => {
        const sPage = new PageContent(page, '/security-functions', 'Security functions', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'category', type: type.SELECT },
            { name: 'provider', type: type.TEXT },
            { name: 'folder', type: type.SELECT_AUTOCOMPLETE },
        ]);
        await use(sPage);
    },

    securityMeasuresPage: async ({ page }, use) => {
        const sPage = new PageContent(page, '/security-measures', 'Security measures', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'category', type: type.SELECT },
            { name: 'status', type: type.SELECT },
            { name: 'eta', type: type.DATE },
            { name: 'expiry_date', type: type.DATE },
            { name: 'link', type: type.TEXT },
            { name: 'effort', type: type.SELECT },
            { name: 'folder', type: type.SELECT_AUTOCOMPLETE },
            { name: 'security_function', type: type.SELECT_AUTOCOMPLETE },
        ]);
        await use(sPage);
    },

    threatsPage: async ({ page }, use) => {
        const tPage = new PageContent(page, '/threats', 'Threats', [
            { name: 'name', type: type.TEXT },
            { name: 'description', type: type.TEXT },
            { name: 'folder', type: type.SELECT_AUTOCOMPLETE },
            { name: 'provider', type: type.TEXT },
        ]);
        await use(tPage);
    },

    usersPage: async ({ page }, use) => {
        const uPage = new PageContent(page, '/users', 'Users', [
            { name: 'email', type: type.TEXT },
            { name: 'first_name', type: type.TEXT },
            { name: 'last_name', type: type.TEXT },
            { name: 'user_groups', type: type.SELECT_MULTIPLE_AUTOCOMPLETE },
            { name: 'is_active', type: type.CHECKBOX },
        ]);
        await use(uPage);
    },

    logedPage: async ({ page }, use) => {        
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login();
        await use(loginPage);
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    analyticsPage: async ({ page }, use) => {
        await use(new AnalyticsPage(page));
    },
});

export const expect = baseExpect.extend({
    toBeOneofValues(received: number, expected: number[]) {
        const pass = received >= expected[0] && received <= expected[1];
        if (pass) {
            return { 
                pass: true, 
                message: () => `passed`
            };
        } else {
            return { 
                pass: false, 
                message: () => `expect(${received}).toBeOneofValues([${expected}])`
            };
        }
    },

    toBeOneofStrings(received: string, expected: string[]) {
        const pass = expected.includes(received);
        if (pass) {
            return { 
                pass: true, 
                message: () => `passed`
            };
        } else {
            return { 
                pass: false, 
                message: () => `expect(${received}).toBeOneofStrings([${expected}])`
            };
        }
    },

    async toHaveTextUnordered(received: string[], expected: string[]) {
        const pass = expected.every(value => received.includes(value));
        if (pass) {
            return { 
                pass: true, 
                message: () => `passed`
            };
        } else {
            return { 
                pass: false, 
                message: () => `expect(${received}).toHaveTextUnordered([${expected}])`
            };
        }
    }
});

export class TestContent {
    static itemBuilder(vars: {[key: string]: any} = this.generateTestVars()) {
        return {
            foldersPage: { 
                displayName: "Domains", 
                build: {
                    name: vars.folderName, 
                    description: vars.description
                },
                editParams: {
                    name: "",
                    description: ""
                }
            },
            usersPage: { 
                displayName: "Users",
                build : {
                    email: vars.user.email
                },
                editParams: {
                    email: '_' + vars.user.email, 
                    first_name: vars.user.firstName,
                    last_name: vars.user.lastName, 
                    user_groups: [
                        `${vars.folderName} - ${vars.usergroups.analyst}`,
                        `${vars.folderName} - ${vars.usergroups.auditor}`,
                        `${vars.folderName} - ${vars.usergroups.domainManager}`,
                        `${vars.folderName} - ${vars.usergroups.validator}`,
                    ],
                    is_active: false
                }
            },
            projectsPage: { 
                displayName: "Projects",
                build: {
                    name: vars.projectName, 
                    description: vars.description, 
                    folder: vars.folderName, 
                    internal_reference: "Test internal reference", 
                    lc_status: "Production"
                },
                editParams: {
                    name: "",
                    description: "",
                    internal_reference: "",
                    lc_status: "End Of Life"
                }
            },
            assetsPage: { 
                displayName: "Assets",
                build: {
                    name: vars.assetName, 
                    description: vars.description, 
                    business_value: "Test value", 
                    folder: vars.folderName, 
                    type: "Primary"
                },
                editParams: {
                    name: "",
                    description: "",
                    business_value: "",
                    type: "Support"
                    //TODO add parent_assets
                }
            },
            threatsPage: { 
                displayName: "Threats",
                build : {
                    name: vars.threatName, 
                    description: vars.description, 
                    folder: vars.folderName, 
                    provider: "Test provider"
                },
                editParams: {
                    name: "",
                    description: "",
                    provider: ""
                }
            },
            securityFunctionsPage: { 
                displayName: "Security functions",
                build : {
                    name: vars.securityFunctionName, 
                    description: vars.description, 
                    category: "Technical",
                    provider: "Test provider", 
                    folder: vars.folderName
                },
                editParams: {
                    name: "",
                    description: "",
                    category: "Physical",
                    provider: ""
                }
            },
            securityMeasuresPage: { 
                displayName: "Security measures",
                dependency: vars.securityFunction.library,
                build: {
                    security_function: {
                        value: vars.securityFunction.name,
                        category: vars.securityFunction.category,
                        request: {
                            url: "security-functions"
                        }
                    },
                    name: vars.securityMeasureName, 
                    description: vars.description, 
                    status: "Planned", 
                    eta: "2025-01-01",
                    expiry_date: "2025-05-01",
                    link: "https://intuitem.com/", 
                    effort: "Large", 
                    folder: vars.folderName, 
                    category: vars.securityFunction.category
                },
                editParams: {
                    security_function: {
                        value: vars.securityFunction2.name,
                        category: vars.securityFunction2.category,
                        request: {
                            url: "security-functions"
                        }
                    },
                    name: "",
                    description: "",
                    status: "Active",
                    eta: "2025-12-31",
                    expiry_date: "2026-02-25",
                    link: "https://intuitem.com/community/",
                    effort: "Medium",
                    category: vars.securityFunction2.category
                }
            },
            complianceAssessmentsPage: { 
                displayName: "Compliance assessments",
                dependency: vars.framework,
                build: {
                    name: vars.assessmentName, 
                    description: vars.description,
                    project: vars.projectName,
                    // version: "1.4.2",
                    framework: vars.framework.name,
                    // eta: "2025-01-01",
                    // due_date: "2025-05-01"
                },
                editParams: {
                    name: "",
                    description: "",
                    // version: "1.4.3",
                    //TODO add framework
                    // eta: "2025-12-31",
                    // due_date: "2026-02-25"
                }
            },
            evidencesPage: {
                displayName: "Evidences",
                dependency: vars.framework,
                build : {
                    name: vars.evidenceName, 
                    description: vars.description, 
                    attachment: vars.file,
                    folder: vars.folderName,
                    requirement_assessments: [
                        vars.requirement_assessment.name,
                        vars.requirement_assessment2.name
                    ],
                    link: "https://intuitem.com/",
                },
                editParams: {
                    name: "", 
                    description: "", 
                    attachment: vars.file2, 
                    link: "https://intuitem.com/community/",
                }
            },
            riskAssessmentsPage: {
                displayName: "Risk assessments",
                dependency: vars.matrix,
                build : {
                    name: vars.riskAssessmentName, 
                    description: vars.description, 
                    project: vars.projectName, 
                    version: "1.4.2", 
                    risk_matrix: vars.matrix.displayName,
                    // eta: "2025-01-01",
                    // due_date: "2025-05-01"
                },
                editParams: {
                    name: "", 
                    description: "", 
                    version: "1.4.3", 
                    //TODO add risk_matrix
                    // eta: "2025-12-31",
                    // due_date: "2026-02-25"
                }
            },
            riskScenariosPage: {
                displayName: "Risk scenarios",
                dependency: vars.threat.library,
                build : {
                    name: vars.riskScenarioName, 
                    description: vars.description, 
                    risk_assessment: vars.riskAssessmentName, 
                    threats: [vars.threat.name, vars.threat2.name],
                },
                editParams: {
                    name: "", 
                    description: "",
                    treatment: "Accept",
                    //TODO add risk_assessment & threats
                    assets: [vars.assetName],
                    existing_measures: "Test existing measures",
                    current_proba: "High",
                    current_impact: "Medium",
                    security_measures: [vars.securityMeasureName],
                    residual_proba: "Medium",
                    residual_impact: "Low",
                    justification: "Test comments"
                }
            },
            riskAcceptancesPage: { 
                displayName: "Risk acceptances",
                build : {
                    name: vars.riskAcceptanceName, 
                    description: vars.description, 
                    expiry_date: "2025-01-01", 
                    folder: vars.folderName, 
                    approver: LoginPage.defaultEmail, 
                    risk_scenarios: [vars.riskScenarioName]
                },
                editParams: {
                    name: "", 
                    description: "", 
                    expiry_date: "2025-12-31", 
                    //TODO add approver & risk_scenarios
                }
            },
            
        }
    }

    static generateTestVars() {
        const vars = structuredClone(testData);
        for (const key in testData) {
            if (key === 'user') {
                const email = testData[key].email.split('@');
                vars[key].email = getUniqueValue(email[0]) + '@' + email[1];
            }
            else if (key.match(/.*Name/)) {
                vars[key] = getUniqueValue(testData[key]);
            }
        }
        return vars
    }
}

export function setHttpResponsesListener(page: Page) {
    page.on('response', response => {
        // expect.soft(response.ok()).toBeTruthy();
        expect.soft(response.status()).toBeOneofValues([100, 399]);
        // expect.soft(response.ok(), 'An error with status code ' + response.status() + ' occured when trying to achieve operation').toBeTruthy();
    });
    page.on('console', message => {
        expect.soft(message.type()).not.toBe('error');
    });
}

export function getUniqueValue(value: string) {
    return process.env.TEST_WORKER_INDEX + '-' + value + '-' + randomBytes(2).toString('hex');
}

export function replaceValues(obj: any, searchValue: string, replaceValue: string) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            replaceValues(obj[key], searchValue, replaceValue);
        } else if (typeof obj[key] === 'string') {
            obj[key] = obj[key].replace(searchValue, replaceValue);
        }
    }
}

export { test as baseTest, type Page, type Locator } from '@playwright/test';